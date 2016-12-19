import React, { Component } from 'react';
import { Container, Button, Form, Header } from 'semantic-ui-react'

export default class RegistrationForm extends Component {
  render() {
    return (
      <Container>
        <Header textAlign='center' as='h2' dividing>
          Already have an account?
        </Header>
        <Form>
          <Form.Field>
            <input placeholder='E-mail' />
          </Form.Field>
          <Form.Field>
            <input placeholder='Password' />
          </Form.Field>
          <Button color='blue' fluid type='submit'>Login</Button>
        </Form>
      </Container>
    );
  }
}
