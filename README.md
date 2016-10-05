import the following libraries into your app.

import city_states from './cities';
import states from './locations/states';
import countries from './locations/countries';
import us_cities_by_state from './locations/us_cities';

countries.js: Array of world Countries

cities.js: Object of cities listed by country name.
    city_states['Country Name'] (title case)

    city_states['United States'] returns a list of us states.
    list of cities or states is returned as a '|' delineated string

us_cities.js: object of us cities by state.
  us_cities_by_state['STATE NAME'] (upper case) returns list of cities as an array

states.js: array of US states
