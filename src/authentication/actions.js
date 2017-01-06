import { browserHistory } from 'react-router'
import { setAccessToken } from 'redux-json-api';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const FACEBOOK_LOGIN_REQUEST  = 'FACEBOOK_LOGIN_REQUEST';
export const FACEBOOK_LOGIN_SUCCESS  = 'FACEBOOK_LOGIN_SUCCESS';
export const FACEBOOK_LOGIN_CANCEL   = 'FACEBOOK_LOGIN_CANCEL';
export const FACEBOOK_LOGIN_FAILURE  = 'FACEBOOK_LOGIN_FAILURE';
export const SET_FACEBOOK_LOGIN_DATA = 'SET_FACEBOOK_LOGIN_DATA';

const AUTH_ENDPOINT = `${process.env.REACT_APP_ENDPOINT_HOST}auth`;
const OAUTH_ENDPOINT = `${process.env.REACT_APP_ENDPOINT_HOST}o`;

export function rootLocation() {
  browserHistory.push('/');
}

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
/*
 * Logout actions
 */
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

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem('auth_token');
    dispatch(receiveLogout());
    browserHistory.push('/auth');
  }
}

/*
 * Facebook login
 */
export function setFbAsyncInit() {
  return dispatch => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: process.env.REACT_APP_FACEBOOK_ID,
        xfbml: true,
        version: 'v2.8'
      });

      dispatch(fbGetLoginStatus());
    };

  }
}

export function loadSdkAsynchronously() {
  ((d, s, id) => {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
}

export function requestFacebookLogin() {
  return {
    type: FACEBOOK_LOGIN_REQUEST,
    payload: {
      facebookLogin: {
        isFetching: true
      },
      isAuthenticated: false,
      account: { }
    }
  }
}

export function receiveFacebookLogin(token) {
  return {
    type: FACEBOOK_LOGIN_SUCCESS,
    payload: {
      facebookLogin: {
        isFetching: false,
      },
      isAuthenticated: true,
      auth_token: token
    }
  }
}

export function cancelFacebookLogin() {
  return {
    type: FACEBOOK_LOGIN_CANCEL,
    payload: {
      facebookLogin: {
        isFetching: false,
      },
      isAuthenticated: false
    }
  }
}

export function facebookLoginError(errorMessage) {
  return {
    type: FACEBOOK_LOGIN_FAILURE,
    payload: {
      facebookLogin: {
        isFetching: false,
        errorMessage
      },
      isAuthenticated: false,
      account: {},
    }
  }
}

export function fbGetLoginStatus() {
  return dispatch => {
    window.FB.getLoginStatus((response) => {
      return dispatch({
        type: SET_FACEBOOK_LOGIN_DATA,
        payload: {
          provider: { ...response, initialized: true }
        }
      });
    }, {scope: 'email'});
  }
}

export function fbLogin() {
  return dispatch => {
    window.FB.login((response) => {
      if (response.status === 'connected') {
        dispatch({
          type: SET_FACEBOOK_LOGIN_DATA,
          payload: {
            provider: { ...response, initialized: true }
          }
        });
        dispatch(getTokenWithFacebook(response.authResponse.accessToken));
      } else {
        dispatch(cancelFacebookLogin())
      }
    }, {scope: 'email'});
  }
}

export function authenticateWithFacebook() {
  return (dispatch, getState) => {
    dispatch(requestFacebookLogin());

    switch(getState().auth.provider.status) {

      case 'connected':
        return dispatch(getTokenWithFacebook(getState().auth.provider.authResponse.accessToken));

      case 'not_authorized':
        return dispatch(fbLogin());

      default:
        break;
    }
  }
}

export function getTokenWithFacebook(token) {
  const config = {
    method: 'GET',
    headers: { 'Content-Type':'application/json', Accept: 'application/json' }
  };

  return dispatch => {
    fetch(`${OAUTH_ENDPOINT}/facebook/token?access_token=${token}`, config)
      .then(response => {
        const token = response.headers.get('Authorization');
        localStorage.setItem('auth_token', token);
        dispatch(setAccessToken(token));
        dispatch(receiveFacebookLogin(token));
        browserHistory.push('/');
      }).catch(err => {
        dispatch(facebookLoginError('Can\'t authenticate your account.'));
      });
  }
}
