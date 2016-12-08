import { connect } from 'react-redux';
import React, { Component } from 'react';
import NewTaskForm from '../../components/NewTaskForm.react';
import EditProjectModal from './EditProjectModal.react';
import { Grid, Segment, Icon, Header, Popup, Button } from 'semantic-ui-react';
import { deleteProject } from '../actions';

class ProjectItem extends Component {

  deleteProject() {
    const { dispatch, project } = this.props;

    dispatch(deleteProject(project));
  }

  renderTasks() {
    return (
      <Header as='h2' textAlign='center'>
        <Icon.Group size='large'>
          <Icon name='list ul' />
          <Icon corner name='add' color='blue' />
        </Icon.Group>
        Add task to handle it!
      </Header>
    );
  }

  render() {
    const { project } = this.props;

    return (
      <Segment.Group color='blue'>
        <Segment inverted color='blue'>
          <Grid>
            <Grid.Column width={14}>
              <Header as='h2'>
                <Icon name='browser' />
                <Header.Content>
                  { project.attributes.title }
                </Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column width={2} textAlign='right' verticalAlign='middle'>
              <EditProjectModal project={project} />
              <Popup
                trigger={<Icon name='trash outline' />}
                content={<Button color='red' icon='attention' content='Delete' onClick={this.deleteProject.bind(this)} />}
                on='click'
                positioning='right center'
              />
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment>
          <NewTaskForm />
        </Segment>
        <Segment basic>
          {this.renderTasks()}
        </Segment>
      </Segment.Group>
    );
  }
}

export default connect()(ProjectItem);
