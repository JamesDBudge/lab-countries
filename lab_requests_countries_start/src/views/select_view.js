const PubSub = require('../helpers/pub_sub.js')

const SelectView = function (element) {
  this.element = element;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:all-countries', (event) => {
    const allCountries = event.detail;
    console.log(event.detail);
    this.populate(allCountries);
  })

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value
    PubSub.publish('CountrySelect:change', selectedIndex)
  })

};

SelectView.prototype.populate = function (allCountries) {
  // for (let country of allCountries){
  allCountries.forEach((country, index) => {

    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option)
  })
}

module.exports = SelectView
