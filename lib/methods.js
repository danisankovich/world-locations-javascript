'use strict';

var cities = require('../locations/cities');
var countries = require('../locations/countries');
var us_cities = require('../locations/us_cities');
var us_states = require('../locations/us_states');

module.exports.getUsCities = function (state, startsWith) {
  state = state.toUpperCase();
  var cities = [];
  if (!startsWith) return us_cities[state];else {
    us_cities[state].forEach(function (e) {
      if (startsWith.indexOf(e[0].toLowerCase()) > -1) {
        cities.push(e);
      }
    });
  }
  return cities;
};

module.exports.getCities = function (country, startsWith) {
  country = country.toLowerCase().split(' ').map(function (e) {
    return e.replace(e[0], e[0].toUpperCase());
  }).join(' ');
  var countryCities = [];
  if (!startsWith) return cities[country].split('|');else {
    cities[country].split('|').forEach(function (e) {
      if (e.length > 0 && startsWith.indexOf(e[0].toLowerCase()) > -1) {
        countryCities.push(e);
      }
    });
  }
  return countryCities;
};