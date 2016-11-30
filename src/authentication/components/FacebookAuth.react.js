import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react'

export default class FacebookAuth extends Component {
  render() {
    return (
      <Button fluid color='facebook'>
        <Icon name='facebook' /> Enter with Facebook
      </Button>
    );
  }
}
