import {combineReducers} from 'redux';
import footer from './components/footer/footer-reducer.js';
import header from './components/header/header-reducer.js';
import categories from './components/app/categories/category-reducer.js';
const rootReducer = combineReducers({
  header,
  footer,
  categories,
});

export default rootReducer;
