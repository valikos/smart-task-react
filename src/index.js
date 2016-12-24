import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import dotenv from 'dotenv';

import { setEndpointHost, setEndpointPath, setAccessToken } from 'redux-json-api';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import reducers from './rootReducer';

import Auth    from './authentication/Page.react';
import ProjectsIndexContainer from './app/containers/ProjectsIndexContainer';

dotenv.config();

// Add the reducer to your store on the `routing` key
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

store.dispatch(setEndpointHost(process.env.ENDPOINT_HOST));
store.dispatch(setEndpointPath(process.env.ENDPOINT_PATH));

if (localStorage.getItem('auth_token')) {
  store.dispatch(setAccessToken(localStorage.getItem('auth_token')));
}

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

function requireAuth(nextState, replace) {
  if (!localStorage.getItem('auth_token')) {
    replace({
      pathname: '/auth',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

function forbidAuth(nextState, replace) {
  if (localStorage.getItem('auth_token')) {
    replace('/');
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={ProjectsIndexContainer} onEnter={requireAuth} />
        <Route component={Auth} path='/auth' onEnter={forbidAuth} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
