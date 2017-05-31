require('es6-promise').polyfill();
require('isomorphic-fetch');
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Root from './root.jsx';
import allReducers from './all-reducers.js';
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(applyMiddleware(thunk))
);

ReactDOM.render(
  <Root store={ store } />,
  document.getElementById('app')
);