import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Message } from 'semantic-ui-react'
import validate from '../formHandlers/newProjectFormValidation';
import submit from '../formHandlers/newProjectFormSubmit';

const renderField = ({ input, label, meta: { touched, error } }) => {
  return (
    <Form.Field>
      <Form.Input {...input} label={label} error={touched && error} />
      {touched && (error && <Message error content={error} />)}
    </Form.Field>
  )
}

const NewProjectForm = (props) => {
  const { handleSubmit } = props;

  return (
    <Form error onSubmit={handleSubmit}>
      <Field
        name="title"
        label='Title'
        component={renderField}
      />
    </Form>
  )
}

export default reduxForm({
  'form': 'newProjectForm',
  validate,
  onSubmit: submit
})(NewProjectForm);
