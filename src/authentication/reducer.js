import * as actions from './actions';

const initialState = {
  login: {
    isFetching: false
  },
  registration: {
    isFetching: false
  },
  isAuthenticated: localStorage.getItem('auth_token') ? true : false
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {

    case actions.LOGIN_REQUEST:
      return Object.assign({}, state, action.payload);

    case actions.LOGIN_SUCCESS:
      return Object.assign({}, state, action.payload);

    case actions.LOGIN_FAILURE:
      return Object.assign({}, state, action.payload);

    case actions.REGISTER_REQUEST:
      return Object.assign({}, state, action.payload);

    case actions.REGISTER_SUCCESS:
      return Object.assign({}, state, action.payload);

    case actions.REGISTER_FAILURE:
      return Object.assign({}, state, action.payload);

    case actions.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })

    default:
      return state
  }
};
