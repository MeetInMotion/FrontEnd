import {combineReducers} from 'redux';
import footer from './components/footer/footer-reducer.js';
import header from './components/header/header-reducer.js';
import categories from './components/app/categories/category-reducer.js';
import events from './components/app/events/event-reducer.js';
import locations from './components/app/locations/location-reducer.js';

const rootReducer = combineReducers({
  header,
  footer,
  categories,
  events,
  locations,
});

export default rootReducer;
