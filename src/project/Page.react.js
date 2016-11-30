import React, { Component } from 'react';
import ProjectList from './ProjectList.react';
import { Grid, Segment, Divider, Icon, Header, Button } from 'semantic-ui-react';

export default class Page extends Component {
  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Row>
          <Grid.Column>
            <ProjectList />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button color='blue' size='large'>
              <Icon name='plus' /> Add Project
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
};
