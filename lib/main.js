'use strict';

var cities = require('../locations/cities');
var countries = require('../locations/countries');
var us_cities = require('../locations/us_cities');
var us_states = require('../locations/us_states');
var methods = require('./methods');
var wloc = module.exports = {
  cities: cities,
  countries: countries,
  us_cities: us_cities,
  us_states: us_states
};
wloc.getUsCities = methods.getUsCities;
wloc.getCities = methods.getCities;
console.log(wloc.getCities('japan', ['y']));