import React from 'react';
import ReactDOM from 'react-dom';
// redux API
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'; // keeps track of all changes in state, displays messages in console
// default state
import initialState from './model'
// combined reducers
import reducers from './reducers';
import App from './App';
// css
import './assets/bootstrap/css/bootstrap.css';
import './assets/font-awesome/css/font-awesome.min.css';
import './assets/css/form-elements.css';
import './assets/css/style.css';

const store = createStore(reducers, initialState, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))


