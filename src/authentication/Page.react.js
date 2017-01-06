import React, { Component }  from 'react';
import LoginForm             from './components/LoginForm.react';
import RegistrationForm      from './components/RegistrationForm.react';
import FacebookAuth          from './components/FacebookAuth.react';
import { Grid, Segment, Divider, Icon, Header } from 'semantic-ui-react';

const styles = {
  wrapper: {
    marginTop: 40
  }
};

export default class Page extends Component {
  render() {
    return (
      <Grid verticalAlign='middle' columns={4} centered style={styles.wrapper}>
        <Grid.Column>
          <Segment>
            <Header as='h2' icon textAlign='center'>
              <Icon circular inverted color='blue' name='user' />
              Smart Task
              <Header.Subheader>
                Enter to start manage your projects
              </Header.Subheader>
            </Header>
            <FacebookAuth />
            <Divider horizontal>OR</Divider>
            <RegistrationForm />
          </Segment>

          <Segment>
            <LoginForm />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
};
