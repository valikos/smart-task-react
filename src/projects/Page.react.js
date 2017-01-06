import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Grid, Container, Button } from 'semantic-ui-react';
import NewProjectModal from './components/NewProjectModal.react';
import ProjectList from './components/ProjectList.react';
import { logoutUser } from '../authentication/actions';

const styles = {
  wrapper: {
    marginTop: 40
  }
};

class Page extends Component {

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

export default connect()(Page);
