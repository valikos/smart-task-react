import * as actions from '../actions/authentication';
import { Record } from 'immutable';

const InitialState = Record({
  email: '',
  isLoggedIn: false
});

const initialState = new InitialState;

export default function authenticationReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

  return state;
}
