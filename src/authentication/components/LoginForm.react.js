import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Container, Button, Form, Header, Message } from 'semantic-ui-react'
import validate from '../formHandlers/loginFormValidation';
import submit from '../formHandlers/loginFormSubmit';

const mapStateToProps = (state) => {
  return { auth: state.auth };
}

const renderField = ({ input, type, label, placeholder, meta: { touched, error } }) => {
  return (
    <Form.Field>
      <Form.Input {...input} type={type} label={label} placeholder={placeholder} error={touched && error} />
      {touched && (error && <Message error content={error} />)}
    </Form.Field>
  );
}

class LoginForm extends Component {
  render() {
    const { handleSubmit, error, auth: { login: { isFetching } } } = this.props;

    return (
      <Container>
        <Header textAlign='center' as='h2' dividing>
          Already have an account?
        </Header>
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
          <Button
            fluid
            color='blue'
            type='submit'
            loading={isFetching}
            disabled={isFetching}
          >
            Sign in
          </Button>
        </Form>
      </Container>
    );
  }
}

LoginForm = connect(mapStateToProps)(LoginForm);
LoginForm = reduxForm({
  form: 'loginForm',
  validate,
  onSubmit: submit
})(LoginForm);

export default LoginForm;
