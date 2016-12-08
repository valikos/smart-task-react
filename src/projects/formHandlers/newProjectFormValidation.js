export default function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Project title is required';
  } else if (values.title.length > 30) {
    errors.title = 'Must be 30 characters or less';
  }

  return errors;
}
