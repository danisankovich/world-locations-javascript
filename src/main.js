'use strict'
const cities = require('../locations/cities');
const countries = require('../locations/countries');
const us_cities = require('../locations/us_cities');
const us_states = require('../locations/us_states');
const methods = require('./methods');
const wloc = module.exports = {
  cities,
  countries,
  us_cities,
  us_states,
}
wloc.getUsCities = methods.getUsCities;
wloc.getCities = methods.getCities;
console.log(wloc.getCities('japan', ['y']));
