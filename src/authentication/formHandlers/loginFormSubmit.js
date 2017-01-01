import { destroy, SubmissionError } from 'redux-form';
import { setAccessToken } from 'redux-json-api';
import { loginUser, receiveLogin, loginError, rootLocation } from '../actions';
import { handleJSONErrorMessage } from '../../lib/handleJSONErrorMessage';

export default function submit(values, dispatch) {
  return dispatch(loginUser(values))
    .then(handleJSONErrorMessage)
    .then(response => {
      const token = response.headers.get('Authorization');
      localStorage.setItem('auth_token', token);
      dispatch(setAccessToken(token));
      dispatch(receiveLogin(token));
      dispatch(destroy('loginForm'));
      dispatch(rootLocation());
    }).catch(err => {
      dispatch(loginError(err.message));
      throw new SubmissionError({_error: err.message});
    });
}
