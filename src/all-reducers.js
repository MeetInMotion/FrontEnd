import {combineReducers} from 'redux';
import rootReducer from './root-reducer.js';
import footer from './components/footer/footer-reducer.js';
import header from './components/header/header-reducer.js';
import categories from './components/app/categories/category-reducer.js';
import events from './components/app/events/event-reducer.js';
import loginConnection from './components/app/login/login-reducer.js';
import userInformation from './components/app/login/user-information';

const allReducers = combineReducers({
  loginConnection,
  userInformation,
  rootReducer,
  header,
  footer,
  categories,
  events,
});

export default allReducers;
