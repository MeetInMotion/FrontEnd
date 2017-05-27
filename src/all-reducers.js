import {combineReducers} from 'redux';
import footer from './components/footer/footer-reducer.js';
import header from './components/header/header-reducer.js';
import categories from './components/app/categories/category-reducer.js';
import events from './components/app/events/event-reducer.js';
import loginConnection from './components/app/login/login-reducer.js';
import userInformation from './components/app/login/user-information';
import locations from './components/app/locations/location-reducer.js';
import createEvent from './components/app/create_event/create-event-reducer.js';
import singleEvent from './components/app/single_event/single-event-reducer.js';

const allReducers = combineReducers({
  loginConnection,
  userInformation,
  header,
  footer,
  categories,
  events,
  locations,
  createEvent,
  singleEvent,

});

export default allReducers;
