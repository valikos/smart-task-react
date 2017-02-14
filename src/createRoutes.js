import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App      from './App';
import Auth     from './authentication/Page.react';
import Projects from './projects/Page.react';

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

export default function createRoutes(dispatch, getState) {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Projects} onEnter={requireAuth} />
      <Route component={Auth} path='/auth' onEnter={forbidAuth} />
    </Route>
  );
}
