const PubSub = require('../helpers/pub_sub.js')

const CountryDetail = function (element) {
  this.element = element
}

CountryDetail.prototype.bindEvents = function () {
  PubSub.subscribe('SelectedCountry:ready', (event) =>{
    const country = event.detail;
    console.log(country)
    this.render(country)
  })
}

CountryDetail.prototype.render = function (country) {
  this.element.innerHTML = ''

  const countryName = document.createElement('h2')
  countryName.textContent = country.name
  this.element.appendChild(countryName)

  const countryRegion = document.createElement('p')
  countryRegion.textContent = country.region
  this.element.appendChild(countryRegion)

  const countryFlag = document.createElement('img')
  countryFlag.src = country.flag
  this.element.appendChild(countryFlag)



};


// CountryDetail.prototype.render
module.exports = CountryDetail
