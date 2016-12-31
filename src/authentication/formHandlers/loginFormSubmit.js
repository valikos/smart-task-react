import { reset, SubmissionError } from 'redux-form';
import { loginUser, loginError, rootLocation } from '../actions';
import { handleJSONErrorMessage } from '../../lib/handleJSONErrorMessage';

export default function submit(values, dispatch) {
  return dispatch(loginUser(values))
    .then(handleJSONErrorMessage)
    .then(() => {
      dispatch(reset('loginForm'));
      dispatch(rootLocation());
    }).catch(err => {
      dispatch(loginError(err.message));
      throw new SubmissionError({_error: err.message});
    });
}
