import { readEndpoint, createEntity, updateEntity, deleteEntity } from 'redux-json-api';

export const fetchTasks = (project) => {
  return dispatch => (dispatch(readEndpoint(`projects/${project.id}/tasks`)));
}

export const createTask = (entity) => {
  return dispatch => (dispatch(createEntity(entity)));
}

export const updateTask = (entity) => {
  return dispatch => (dispatch(updateEntity(entity)));
}

export const deleteTask = (entity) => {
  return dispatch => (dispatch(deleteEntity(entity)));
}

export const toggleTaskStatus = (entity) => {
  return dispatch => (dispatch(updateEntity(entity)));
}
