import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Message } from 'semantic-ui-react'
import validate from '../formHandlers/editProjectFormValidation';
import submit from '../formHandlers/editProjectFormSubmit';

const renderField = ({ input, label, meta: { touched, error } }) => {
  return (
    <div>
      <Form.Input {...input} label={label} error={touched && error} />
      {touched && (error && <Message error content={error} />)}
    </div>
  )
}

class EditProjectForm extends Component {

  componentWillMount() {
    const { change, project: { attributes: { title } } } = this.props;

    change('title', title);
    change('entity', this.props.project);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form error onSubmit={handleSubmit}>
        <Form.Field>
          <Field
            name='title'
            label='Title'
            component={renderField}
          />
        </Form.Field>
      </Form>
    );
  }
}

export default reduxForm({
  'form': 'editProjectForm',
  validate,
  onSubmit: submit
})(EditProjectForm);
