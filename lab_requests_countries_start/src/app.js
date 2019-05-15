const Countries = require('./models/countries.js')
const SelectView = require('./views/select_view.js')
const CountryDetail = require('./views/country_detail_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const countryDetail = document.querySelector('#country')
  const countryData = new CountryDetail(countryDetail)
  countryData.bindEvents()

  const selectElement = document.querySelector('select#countries')
  const countryDropdown = new SelectView(selectElement)
  countryDropdown.bindEvents();

  const countries = new Countries()
  countries.getData()

});
