import React, { Component, PropTypes as RPT } from 'react';
import NewTaskForm from '../components/NewTaskForm.react';
import DummyTasks from '../components/DummyTasks.react';
import { Grid, Segment, Icon, Header } from 'semantic-ui-react';

export default class Project extends Component {

  static propTypes = {
    entity: RPT.shape({
      id: RPT.number.isRequired,
      title: RPT.string.isRequired
    }).isRequired
  };

  render() {
    const { entity } = this.props;

    return (
      <Segment.Group color='blue'>
        <Segment inverted color='blue'>
          <Grid>
            <Grid.Column width={14}>
              <Header as='h2'>
                <Icon name='browser' />
                <Header.Content>
                  { entity.get('title') }
                </Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column width={2} textAlign='right' verticalAlign='middle'>
              <Icon name='write' />
              <Icon name='trash outline' />
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment>
          <NewTaskForm />
        </Segment>
        <Segment basic>
          <DummyTasks />
        </Segment>
      </Segment.Group>
    );
  }
}
