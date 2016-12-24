import { reset, SubmissionError } from 'redux-form';
import { loginUser, rootLocation } from '../actions';

export default function submit(values, dispatch) {
  return dispatch(loginUser(values)).then(() => {
    dispatch(reset('loginForm'));
    dispatch(rootLocation());
  }).catch(err => {
    throw new SubmissionError({_error: err});
  });
}
