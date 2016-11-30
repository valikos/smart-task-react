import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'

export default class NewTaskForm extends Component {
  render() {
    return (
      <Input
        fluid
        icon='plus'
        iconPosition='left'
        action={{ color: 'green', content: 'Add Task' }}
        placeholder='Start typing here to create a task'
      />
    );
  }
}
