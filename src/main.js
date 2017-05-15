import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Root from './root.jsx';
import allReducers from './all-reducers.js';

/* eslint-disable no-underscore-dangle */
var store = createStore(
  allReducers,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
      thunkMiddleware
  )
);

/* eslint-enable */

ReactDOM.render(<Root store={store} />, document.getElementById('app'));

