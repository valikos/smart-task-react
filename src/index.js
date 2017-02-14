import React from 'react';
import ReactDOM from 'react-dom';

import { setEndpointHost, setEndpointPath, setAccessToken } from 'redux-json-api';

import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import createStore from './createStore';
import createRoutes from './createRoutes';

const store = createStore();
const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes(store.dispatch, store.getState);

store.dispatch(setEndpointHost(process.env.REACT_APP_ENDPOINT_HOST));
store.dispatch(setEndpointPath(process.env.REACT_APP_ENDPOINT_PATH));

if (localStorage.getItem('auth_token')) {
  store.dispatch(setAccessToken(localStorage.getItem('auth_token')));
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
