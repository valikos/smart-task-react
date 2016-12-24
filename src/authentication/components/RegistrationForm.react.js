import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Button, Checkbox, Form, Header, Message } from 'semantic-ui-react'
import validate from '../formHandlers/registrationFormValidation';
import submit from '../formHandlers/registrationFormSubmit';

const renderField = ({ input, type, label, placeholder, meta: { touched, error } }) => {
  return (
    <Form.Field>
      <Form.Input {...input} type={type} label={label} placeholder={placeholder} error={touched && error} />
      {touched && (error && <Message error content={error} />)}
    </Form.Field>
  )
}

class RegistrationForm extends Component {
  render() {
    const { handleSubmit, error } = this.props;

    return (
      <Container>
        <Form error onSubmit={handleSubmit}>
          <Field
            name='login'
            placeholder='E-mail'
            type='text'
            component={renderField}
          />
          <Field
            name='password'
            placeholder='Password'
            type='password'
            component={renderField}
          />
          {error && (<Message error content={error} />)}
          <Button color='blue' fluid type='submit'>Registration</Button>
        </Form>
      </Container>
    );
  }
}

export default reduxForm({
  form: 'registrationForm',
  validate,
  onSubmit: submit
})(RegistrationForm);
