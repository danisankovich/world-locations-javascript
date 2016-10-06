const cities = require('./locations/cities');
const countries = require('./locations/countries');
const us_cities = require('./locations/us_cities');
const us_states = require('./locations/us_states');

module.exports.getAllUsStates = (startsWith) => {
  const states = []
  if (startsWith) {
    us_states.forEach((e)=> {
      if(startsWith.indexOf(e[0].toLowerCase()) > -1) {
        states.push(e);
      }
    })
    return states.length > 0 ? states : 'No states starting with those letters';
  }
  return us_states;
}
module.exports.getUsCities = (state, startsWith) => {
  state = state.toUpperCase();
  let cities = [];
  if(!startsWith) return us_cities[state];
  else {
    us_cities[state].forEach((e)=> {
      if(startsWith.indexOf(e[0].toLowerCase()) > -1) {
        cities.push(e);
      }
    })
  }
  return cities;
}

module.exports.getCities = (country, startsWith) => {
  country = country.toLowerCase().split(' ').map((e) => {
    return e.replace(e[0], e[0].toUpperCase())
  }).join(' ')
  const countryCities = []
  if(!startsWith) return cities[country].split('|');
  else {
    cities[country].split('|').forEach((e)=> {
      if(e.length > 0 && startsWith.indexOf(e[0].toLowerCase()) > -1) {
        countryCities.push(e);
      }
    })
  }
  return countryCities;
}
module.exports.getAllCountries = (startsWith) => {
  const countriesList = []
  if(!startsWith) return countries;
  else {
    countries.forEach((e)=> {
      if(e.length > 0 && startsWith.indexOf(e[0].toLowerCase()) > -1) {
        countriesList.push(e);
      }
    })
  }
  return countriesList.length > 0 ? countriesList : 'No countries start with those letters';
}
