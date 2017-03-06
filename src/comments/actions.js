import {
  createResource,
  deleteResource } from 'redux-json-api';

export const createComment = (entity) => {
  return dispatch => dispatch(createResource(entity));
}

export const deleteComment = (entity) => {
  return dispatch => dispatch(deleteResource(entity));
}
