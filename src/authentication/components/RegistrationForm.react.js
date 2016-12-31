import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Container, Button, Checkbox, Form, Header, Message } from 'semantic-ui-react'
import validate from '../formHandlers/registrationFormValidation';
import submit from '../formHandlers/registrationFormSubmit';

const mapStateToProps = (state) => {
  return { auth: state.auth };
}

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
    const { handleSubmit, error, auth: { registration: { isFetching } } } = this.props;

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
          <Button
            fluid
            color='blue'
            type='submit'
            loading={isFetching}
            disabled={isFetching}
          >
            Sign up
          </Button>
        </Form>
      </Container>
    );
  }
}

RegistrationForm = connect(mapStateToProps)(RegistrationForm);
RegistrationForm = reduxForm({
  form: 'registrationForm',
  validate,
  onSubmit: submit
})(RegistrationForm);

export default RegistrationForm;
