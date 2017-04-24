import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Root from './components/root.jsx';
import rootReducer from './reducers/root-reducer.js';
var store = createStore(rootReducer);
ReactDOM.render(<Root store={store} />, document.getElementById('app'));
