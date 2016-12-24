import React, { Component, PropTypes as RPT } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Message } from 'semantic-ui-react'
import validate from '../formHandlers/editTaskFormValidation';
import submit from '../formHandlers/editTaskFormSubmit';

const renderField = ({ input, type, label, meta: { touched, error } }) => {
  return (
    <Form.Field>
      <Form.Input {...input} type={type} label={label} error={touched && error} />
      {touched && (error && <Message error content={error} />)}
    </Form.Field>
  )
}

class EditTaskForm extends Component {

  static propTypes = {
    task: RPT.any.isRequired
  }

  componentWillMount() {
    const { change, task: { attributes: { title } } } = this.props;

    change('title', title);
    change('entity', this.props.task);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form error onSubmit={handleSubmit}>
        <Field
          type='text'
          name='title'
          label='Title'
          component={renderField}
        />
      </Form>
    );
  }
}

export default reduxForm({
  'form': 'editTaskForm',
  validate,
  onSubmit: submit
})(EditTaskForm);
