import React, { Component, PropTypes as RPT } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Message, Button, Label } from 'semantic-ui-react'
import validate from '../formHandlers/newCommentFormValidation';
import submit from '../formHandlers/newCommentFormSubmit';

const renderField = ({ input, label, meta: { touched, error } }) => {
  return (
    <Form.Field>
      {touched && (error && <Label color='red' pointing='below'>{error}</Label>)}
      <Form.TextArea
        {...input}
        placeholder='Leave your comment there...'
        rows='3'
        error={touched && error}
      />
    </Form.Field>
  )
}

class NewCommentForm extends Component {
  static propTypes = {
    task: RPT.any.isRequired
  }

  componentWillMount() {
    const { change, task } = this.props;

    change('task', task);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form reply error onSubmit={handleSubmit}>
        <Field
          name='body'
          component={renderField}
        />
      </Form>
    )
  }
}

export default reduxForm({
  'form': 'newCommentForm',
  validate,
  onSubmit: submit
})(NewCommentForm);
