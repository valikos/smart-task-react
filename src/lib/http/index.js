import {
  readEndpoint as readEndpointOriginal,
  createEntity as createEntityOriginal,
  updateEntity as updateEntityOriginal,
  deleteEntity as deleteEntityOriginal,
  setAccessToken
} from 'redux-json-api';
import { badRequest } from '../../app/actions';

export function readEndpoint(url, dispatch) {
  dispatch(setAccessToken(localStorage.getItem('auth_token')));
  dispatch(readEndpointOriginal(url)).catch((err) => dispatch(badRequest()));
}

export function createEntity(entity, dispatch) {
  dispatch(setAccessToken(localStorage.getItem('auth_token')));
  dispatch(createEntityOriginal(entity)).catch((err) => dispatch(badRequest()));
}

export function updateEntity(entity, dispatch) {
  dispatch(setAccessToken(localStorage.getItem('auth_token')));
  dispatch(updateEntityOriginal(entity)).catch((err) => dispatch(badRequest()));
}

export function deleteEntity(entity, dispatch) {
  dispatch(setAccessToken(localStorage.getItem('auth_token')));
  dispatch(deleteEntityOriginal(entity)).catch((err) => dispatch(badRequest()));
}
