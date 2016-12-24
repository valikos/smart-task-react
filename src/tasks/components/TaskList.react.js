import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import TaskItem from './TaskItem.react';

const mapStateToProps = ({ api: { tasks = { data: [] } } }) => ({ tasks });

class TaskList extends Component {
  renderTasks() {
    const { tasks, project } = this.props;

    const task_list = tasks.data.filter((task) => {
      return task.relationships.project.data.id === project.id
    }).map(task => {
      return <TaskItem key={task.id} task={task} project={project} />
    });

    if (!task_list.length)
      return <Header block as='h3' content='Please add task to manage your processes' textAlign='center' />;

    return task_list;
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
