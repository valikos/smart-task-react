import { connect } from 'react-redux';
import React, { Component } from 'react';
import TaskItemCalendarIcon from './TaskItemCalendarIcon.react';
import EditTaskModal from './EditTaskModal.react';
import commentComponents from '../../comments/components';
import { Table, Checkbox, Popup, Icon, Button } from 'semantic-ui-react'
import { deleteTask, toggleTaskStatus } from '../actions';

const { CommentsModal } = commentComponents;

class TaskItem extends Component {
  deleteItem() {
    const { dispatch, task } = this.props;

    dispatch(deleteTask(task));
  }

  toggleStatus() {
    const { dispatch, task: { id, type, attributes: { completed } } } = this.props;

    const entity = {
      id,
      type,
      attributes: {
        completed: !completed
      }
    }

    dispatch(toggleTaskStatus(entity));
  }

  render() {
    const { task, task: { attributes: { title, completed } } } = this.props;

    return (
      <Table selectable structured basic='very'>
        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox
                checked={completed}
                onChange={this.toggleStatus.bind(this)}
              />
            </Table.Cell>

            <Table.Cell>
              {title}
            </Table.Cell>

            <Table.Cell collapsing>
              <CommentsModal task={task} />
              <TaskItemCalendarIcon task={task} />
              <Icon name='resize vertical' />
              <EditTaskModal task={task} />
              <Popup
                trigger={<Icon name='trash outline' />}
                content={<Button color='red' icon='attention' content='Delete' onClick={this.deleteItem.bind(this)} />}
                on='click'
                position='right center'
              />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

export default connect()(TaskItem);
