import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react'
import submit from '../formHandlers/newTaskFormSubmit';

const renderField = ({ input, label, meta: { touched, error } }) => {
  return (
    <Form.Input
      {...input}
      placeholder='Start typing there to create a task'
      icon='plus'
      iconPosition='left'
      action={<Button color='green' type='submit'>Add Task</Button>}
    />
  )
}

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Missed title for task';
  }

  return errors;
}

class NewTaskForm extends Component {
  componentWillMount() {
    const { change, project } = this.props;

    change('project', project);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={ handleSubmit }>
        <Field
          name='title'
          component={renderField}
        />
      </Form>
    );
  }
}

export default reduxForm({
  validate,
  onSubmit: submit
})(NewTaskForm);

