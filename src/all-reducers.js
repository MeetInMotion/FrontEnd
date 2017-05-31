import {combineReducers} from 'redux';
import footer from './components/footer/footer-reducer.js';
import header from './components/header/header-reducer.js';
import categories from './components/app/categories/category-reducer.js';
import events from './components/app/events/event-reducer.js';
import user from './components/app/login/user-reducer';
import locations from './components/app/locations/locations-reducer.js';
import location from './components/app/single_location/location-reducer.js';
import createEvent from './components/app/create_event/create-event-reducer.js';
import singleEvent from './components/app/single_event/single-event-reducer.js';
import login from './components/app/login/login-reducer';
import weather from './components/app/weather/weather-reducer';

const allReducers = combineReducers({
  header,
  footer,
  categories,
  events,
  locations,
  createEvent,
  location,
  singleEvent,
  user,
  login,
  weather,
});

export default allReducers;
