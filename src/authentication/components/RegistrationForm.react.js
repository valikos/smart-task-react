import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

export default class RegistrationForm extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <input placeholder='E-mail' />
        </Form.Field>
        <Form.Field>
          <input placeholder='Password' />
        </Form.Field>
        <Button color='blue' fluid type='submit'>Registration</Button>
      </Form>
    );
  }
}
