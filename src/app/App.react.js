import React, { Component, PropTypes as RPT } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {

  static propTypes = {
    children: RPT.node
  }

  render() {

    const { children } = this.props;

    return (
      <MuiThemeProvider>
        {children}
      </MuiThemeProvider>
    );
  }
}
