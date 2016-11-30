import React, { Component }  from 'react';
import LoginForm             from './components/LoginForm.react';
import RegistrationForm      from './components/RegistrationForm.react';
import FacebookAuth          from './components/FacebookAuth.react';
import { Grid, Segment, Divider, Icon, Header } from 'semantic-ui-react';

export default class Page extends Component {

  render() {
    return (
      <Grid centered columns={3}>
        <Grid.Row>
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
        </Grid.Row>
      </Grid>
    );
  }
};

