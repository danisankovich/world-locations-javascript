const cities = require('../locations/cities');
const countries = require('../locations/countries');
const us_cities = require('../locations/us_cities');
const us_states = require('../locations/us_states');

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
