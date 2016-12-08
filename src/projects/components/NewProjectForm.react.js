import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Message } from 'semantic-ui-react'
import validate from '../formHandlers/newProjectFormValidation';
import submit from '../formHandlers/newProjectFormSubmit';

const renderField = ({ input, label, meta: { touched, error } }) => {
  return (
    <div>
      <Form.Input {...input} label={label} error={touched && error} />
      {touched && (error && <Message error content={error} />)}
    </div>
  )
}

const NewProjectForm = (props) => {
  const { handleSubmit } = props;

  return (
    <Form error onSubmit={handleSubmit}>
      <Form.Field>
        <Field
          name="title"
          label='Title'
          component={renderField}
        />
      </Form.Field>
    </Form>
  )
}

export default reduxForm({
  'form': 'newProjectForm',
  validate,
  onSubmit: submit
})(NewProjectForm);
