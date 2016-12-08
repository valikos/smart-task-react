import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import projectComponents from '../../projects/components';

const { ProjectList, NewProjectModal } = projectComponents;

export default class ProjectsIndex extends Component {

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
            <NewProjectModal />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
