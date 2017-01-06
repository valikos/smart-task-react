import { readEndpoint, createEntity, updateEntity, deleteEntity } from 'redux-json-api';

export const PROJECT_LIST_REQUEST = 'PROJECT_LIST_REQUEST';
export const PROJECT_LIST_SUCCESS = 'PROJECT_LIST_SUCCESS';
export const PROJECT_LIST_FAILURE = 'PROJECT_LIST_FAILURE';

export const fetchProjects = () => {
  return dispatch => {
    dispatch(requestProjectList());
    dispatch(readEndpoint('projects')).then(() => {
      dispatch(receiveProjectList());
    });
  }
}

export const createProject = (entity) => {
  return dispatch => dispatch(createEntity(entity));
}

export const updateProject = (entity) => {
  return dispatch => dispatch(updateEntity(entity));
}

export const deleteProject = (entity) => {
  return dispatch => dispatch(deleteEntity(entity));
}

function requestProjectList() {
  return {
    type: PROJECT_LIST_REQUEST
  }
}

function receiveProjectList() {
  return {
    type: PROJECT_LIST_SUCCESS
  }
}
