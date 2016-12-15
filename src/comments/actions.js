import { createEntity, deleteEntity } from 'redux-json-api';

export const createComment = (entity) => {
  return dispatch => (dispatch(createEntity(entity)));
}

export const deleteComment = (entity) => {
  return dispatch => (dispatch(deleteEntity(entity)));
}
