'use strict';

var methods = require('./methods');
var wloc = module.exports = {};

wloc.getUsCities = methods.getUsCities;
wloc.getCities = methods.getCities;
wloc.getAllUsStates = methods.getAllUsStates;
wloc.getAllCountries = methods.getAllCountries;
console.log(wloc.getAllCountries(['d']));
