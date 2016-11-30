import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Foo from './modules/Foo';
import Bar from './modules/Bar';
import Auth    from './authentication/Page.react';
import Project from './project/Page.react';
import reducers from './reducers';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Add the reducer to your store on the `routing` key
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Project} />
        <Route path="/authentication" component={Auth} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
