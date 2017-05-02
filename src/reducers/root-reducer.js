import {combineReducers} from 'redux';
import footer from './footer/footer.js';
import header from './header/header.js';
import categories from './categories/categories.js';
const rootReducer = combineReducers({
  header,
  footer,
  categories,
});

export default rootReducer;
