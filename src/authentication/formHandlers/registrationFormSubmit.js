import { reset, SubmissionError } from 'redux-form';
import { registerUser, rootLocation } from '../actions';

export default function submit(values, dispatch) {
  return dispatch(registerUser(values)).then(() => {
    dispatch(reset('registrationForm'));
    dispatch(rootLocation());
  }).catch(err => {
    throw new SubmissionError({_error: err});
  });
}
