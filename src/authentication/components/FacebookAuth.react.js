import React, { Component } from 'react';
import { Icon, Button, Popup } from 'semantic-ui-react'

export default class FacebookAuth extends Component {
  render() {
    return (
      <Popup
        trigger={
          <Button fluid color='facebook'>
            <Icon name='facebook' /> Enter with Facebook
          </Button>
        }
        content='This feature is not available yet'
        inverted
        hideOnScroll
      />
    );
  }
}
