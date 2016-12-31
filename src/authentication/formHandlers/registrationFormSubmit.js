import { reset, SubmissionError } from 'redux-form';
import { registerUser, registrationError, rootLocation } from '../actions';
import { handleJSONErrorMessage } from '../../lib/handleJSONErrorMessage';

export default function submit(values, dispatch) {
  return dispatch(registerUser(values))
  .then(handleJSONErrorMessage)
  .then(() => {
    dispatch(reset('registrationForm'));
    dispatch(rootLocation());
  })
  .catch(err => {
    dispatch(registrationError(err.message));
    throw new SubmissionError({_error: err.message});
  });
}
