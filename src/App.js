import React, { Component, PropTypes as RPT } from 'react';
import '../node_modules/semantic-ui-css/semantic.min.css';
import '../node_modules/react-datepicker/dist/react-datepicker.css';
import './App.css';

class App extends Component {

  static propTypes = {
    children: RPT.node
  }

  render() {
    const { children } = this.props;

    return children;
  }
}

export default App;
