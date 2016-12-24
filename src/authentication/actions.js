import { browserHistory } from 'react-router'
import { setAccessToken } from 'redux-json-api';

// Registraion actions
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
// Login actions
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
// Logout actions
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

const AUTH_ENDPOINT = `${process.env.REACT_APP_ENDPOINT_HOST}auth`;

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    account: { login: creds.login }
  }
}

function receiveLogin(token) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    auth_token: token
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    account: {},
    message
  }
}

function requestRegistration(creds) {
  return {
    type: REGISTER_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    account: { login: creds.login }
  }
}

function receiveRegistration(token) {
  return {
    type: REGISTER_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    auth_token: token
  }
}

function registrationError(message) {
  return {
    type: REGISTER_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    account: {},
    message
  }
}


function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

function receiveLogout() {
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

  console.log(AUTH_ENDPOINT);

  return dispatch => {
    dispatch(requestLogin(creds));

    return fetch(`${AUTH_ENDPOINT}/login?${query}`, config)
      .then(response => {
        if (!response.ok) {
          dispatch(loginError('There was an error logging in'));
          return Promise.reject('There was an error logging in');
        } else {
          const token = response.headers.get('Authorization');
          localStorage.setItem('auth_token', token);
          dispatch(setAccessToken(token));
          dispatch(receiveLogin(token));
        }
      })
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

    return fetch(`${AUTH_ENDPOINT}/create-account?${query}`, config)
      .then(response => {
        if (!response.ok) {
          dispatch(registrationError('There was an error logging in'));
          return Promise.reject('There was an error logging in');
        } else {
          const token = response.headers.get('Authorization');
          localStorage.setItem('auth_token', token);
          dispatch(setAccessToken(token));
          dispatch(receiveRegistration(token));
        }
      })
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
