import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Button, Message } from 'semantic-ui-react'
import { authenticateWithFacebook } from '../actions';

class FacebookAuth extends Component {

  render() {
    const {
      dispatch,
      auth: {
        provider: { initialized },
        facebookLogin: {
          isFetching,
          errorMessage
      } } } = this.props;

    return (
      <div>
        <Button
          fluid
          color='facebook'
          loading={isFetching}
          disabled={!initialized || isFetching}
          onClick={() => dispatch(authenticateWithFacebook())}
        >
          <Icon name='facebook' /> Enter with Facebook
        </Button>
        { errorMessage && <Message error content={errorMessage} /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(FacebookAuth);
