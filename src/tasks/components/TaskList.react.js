import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import TaskItem from './TaskItem.react';

const mapStateToProps = ({ api: { tasks = { data: [] } } }) => ({ tasks });

class TaskList extends Component {
  renderTasks() {
    const { tasks, project } = this.props;

    if (tasks.data.length === 0)
      return <Container />

    return tasks.data.map((task) => {
      if (task.relationships.project.data.id === project.id)
        return <TaskItem key={task.id} task={task} project={project} />
    });
  }

  render() {
    return (
      <Container>
        { this.renderTasks() }
      </Container>
    );
  }
}

export default connect(mapStateToProps)(TaskList);
