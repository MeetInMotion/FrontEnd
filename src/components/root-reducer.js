import {combineReducers} from 'redux';
import footer from './footer/footer-reducer.js';
import header from './header/header-reducer.js';
import categories from './app/categories/category-reducer.js';
const rootReducer = combineReducers({
  header,
  footer,
  categories,
});

export default rootReducer;
