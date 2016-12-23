import React, { Component } from 'react';
import { Menu, Grid, Container, Button } from 'semantic-ui-react';
import projectComponents from '../../projects/components';

const { ProjectList, NewProjectModal } = projectComponents;

export default class ProjectsIndex extends Component {

  render() {
    return (
      <div>
        <Menu fixed='top'>
          <Container>
            <Menu.Item
              name='logo'
              content='Smart Task'
            />

            <Menu.Item>
              <NewProjectModal />
            </Menu.Item>

            <Menu.Menu position='right'>
              <Menu.Item>
                <Button primary>Logout</Button>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>

        <Grid centered columns={2}>
          <Grid.Column style={styles.wrapper}>
            <ProjectList />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    marginTop: 40
  }
}
