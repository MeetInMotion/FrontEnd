import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import Root from './root.jsx';
import LoginPage from './login-page.jsx';
import allReducers from './all-reducers.js';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
      thunkMiddleware
  )
);

ReactDOM.render(<LoginPage store={store} />, document.getElementById('app'));
