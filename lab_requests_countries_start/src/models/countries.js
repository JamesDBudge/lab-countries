const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const Countries = function () {
    this.text = null;
}

Countries.prototype.getData = function () {
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all')
  request.get((data) => {
    this.text = data
    console.log(data);
    PubSub.publish('Countries:all-countries', this.text)
  })

    PubSub.subscribe('CountrySelect:change', (event) => {
      console.log(event);
      const selectedCountry = event.detail;
      this.publishCountryDetail(selectedCountry);
    })

};

Countries.prototype.publishCountryDetail = function (selectedCountry) {
  console.log(selectedCountry);
  const countryData = this.text[selectedCountry]
  PubSub.publish('SelectedCountry:ready', countryData)
};


module.exports = Countries;
