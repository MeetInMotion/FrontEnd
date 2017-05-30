import {combineReducers} from 'redux';
import footer from './components/footer/footer-reducer.js';
import header from './components/header/header-reducer.js';
import categories from './components/app/categories/category-reducer.js';
import events from './components/app/events/event-reducer.js';
import user from './components/header/user-reducer';
import locations from './components/app/locations/locations-reducer.js';
import location from './components/app/single_location/location-reducer.js';
import createEvent from './components/app/create_event/create-event-reducer.js';
import singleEvent from './components/app/single_event/single-event-reducer.js';

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
});

export default allReducers;
