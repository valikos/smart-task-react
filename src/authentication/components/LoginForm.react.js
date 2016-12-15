import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Button, Checkbox, Form, Header, Message } from 'semantic-ui-react'
import validate from '../formHandlers/loginFormValidation';
import submit from '../formHandlers/loginFormSubmit';

const renderField = ({ input, label, placeholder, meta: { touched, error } }) => {
  return (
    <Form.Field>
      <Form.Input {...input} label={label} placeholder={placeholder} error={touched && error} />
      {touched && (error && <Message error content={error} />)}
    </Form.Field>
  )
}

class LoginForm extends Component {
  render() {
    const { handleSubmit, error } = this.props;

    return (
      <Container>
        <Header textAlign='center' as='h2' dividing>
          Already have an account?
        </Header>
        <Form error onSubmit={handleSubmit}>
          <Field
            name='login'
            placeholder='E-mail'
            component={renderField}
          />
          <Field
            name='password'
            placeholder='Password'
            component={renderField}
          />
          {error && (<Message error content={error} />)}
          <Button color='blue' fluid type='submit'>Login</Button>
        </Form>
      </Container>
    );
  }
}

export default reduxForm({
  form: 'loginForm',
  validate,
  onSubmit: submit
})(LoginForm);
