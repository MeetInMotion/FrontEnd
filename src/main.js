import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Root from './root.jsx';
import rootReducer from './root-reducer.js';
var store = createStore(rootReducer,
                        applyMiddleware(
                            thunkMiddleware
                        ));
ReactDOM.render(<Root store={store} />, document.getElementById('app'));
