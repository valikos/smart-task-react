import { browserHistory } from 'react-router'

// Registraion actions
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

// Sign in actions
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Logout actions
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

const AUTH_ENDPOINT = `${process.env.REACT_APP_ENDPOINT_HOST}auth`;

/*
 * Sign in actions
 */
export function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    payload: {
      login: {
        isFetching: true
      },
      isAuthenticated: false,
      account: { login: creds.login }
    }
  }
}

export function receiveLogin(token) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      login: {
        isFetching: false,
      },
      isAuthenticated: true,
      auth_token: token
    }
  }
}

export function loginError(errorMessage) {
  return {
    type: LOGIN_FAILURE,
    payload: {
      login: {
        isFetching: false,
        errorMessage
      },
      isAuthenticated: false,
      account: {},
    }
  }
}

/*
 * Sign up actions
 */
export function requestRegistration(creds) {
  return {
    type: REGISTER_REQUEST,
    payload: {
      registration: {
        isFetching: true
      },
      isAuthenticated: false,
      account: { login: creds.login }
    }
  }
}

export function receiveRegistration(token) {
  return {
    type: REGISTER_SUCCESS,
    payload: {
      registration: {
        isFetching: false,
      },
      isAuthenticated: true,
      auth_token: token
    }
  }
}

export function registrationError(errorMessage) {
  return {
    type: REGISTER_FAILURE,
    payload: {
      registration: {
        isFetching: false,
        errorMessage
      },
      isAuthenticated: false,
      account: {},
    }
  }
}

export function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

export function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

export function rootLocation() {
  browserHistory.push('/');
}

export function loginUser(creds) {
  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/json', Accept: 'application/json' }
  }

  const query = `login=${creds.login}&password=${creds.password}`;

  return dispatch => {
    dispatch(requestLogin(creds));

    return Promise.resolve(fetch(`${AUTH_ENDPOINT}/login?${query}`, config));
  }
}

export function registerUser(creds) {
  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/json', Accept: 'application/json' }
  }

  const query = `login=${creds.login}&password=${creds.password}&login-confirm=${creds.login}&password-confirm=${creds.password}`;

  return dispatch => {
    dispatch(requestRegistration(creds));

    return Promise.resolve(fetch(`${AUTH_ENDPOINT}/create-account?${query}`, config));
  }
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem('auth_token');
    dispatch(receiveLogout());
    browserHistory.push('/auth');
  }
}
