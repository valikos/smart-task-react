import { destroy, SubmissionError } from 'redux-form';
import { setAccessToken } from 'redux-json-api';
import { registerUser, receiveRegistration, registrationError, rootLocation } from '../actions';
import { handleJSONErrorMessage } from '../../lib/handleJSONErrorMessage';

export default function submit(values, dispatch) {
  return dispatch(registerUser(values))
    .then(handleJSONErrorMessage)
    .then(response => {
      const token = response.headers.get('Authorization');
      localStorage.setItem('auth_token', token);
      dispatch(setAccessToken(token));
      dispatch(receiveRegistration(token));
      dispatch(destroy('registrationForm'));
      dispatch(rootLocation());
    })
    .catch(err => {
      dispatch(registrationError(err.message));
      throw new SubmissionError({_error: err.message});
    });
}
