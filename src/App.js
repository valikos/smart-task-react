import React, { Component, PropTypes as RPT } from 'react';
import logo from './logo.svg';

import './App.css';
import '../node_modules/semantic-ui-css/semantic.min.css';

import { Router, useRouterHistory } from 'react-router';

class App extends Component {

  static propTypes = {
    children: RPT.node
  }

  render() {
    const { children } = this.props;

    return (
      <div className="App">
        {children}
      </div>
    );
  }
}

export default App;
