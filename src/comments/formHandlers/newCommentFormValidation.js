export default function validate(values) {
  const errors = {};

  if (!values.body) {
    errors.body = 'Comment body is required';
  } else if (values.body.length > 500) {
    errors.body = 'Must be 500 characters or less';
  }

  return errors;
}
