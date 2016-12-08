import { readEndpoint, createEntity, updateEntity, deleteEntity } from 'redux-json-api';

export const fetchProjects = () => {
  return dispatch => (dispatch(readEndpoint('projects')));
}

export const createProject = (entity) => {
  return dispatch => (dispatch(createEntity(entity)));
}

export const updateProject = (entity) => {
  return dispatch => (dispatch(updateEntity(entity)));
}

export const deleteProject = (entity) => {
  return dispatch => (dispatch(deleteEntity(entity)));
}
