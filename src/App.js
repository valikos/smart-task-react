import React, { Component, PropTypes as RPT } from 'react';
import './App.css';
import '../node_modules/semantic-ui-css/semantic.min.css';
import '../node_modules/react-datepicker/dist/react-datepicker.css';

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
