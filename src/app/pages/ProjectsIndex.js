import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Grid, Container, Button } from 'semantic-ui-react';
import projectComponents from '../../projects/components';
import { logoutUser } from '../../authentication/actions';

const { ProjectList, NewProjectModal } = projectComponents;

class ProjectsIndex extends Component {

  render() {

    const { dispatch } = this.props;

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
                <Button
                  primary
                  onClick={() => dispatch(logoutUser())}
                >
                  Logout
                </Button>
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

export default connect()(ProjectsIndex);
