import { Map } from 'immutable';

import {
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS } from './constants';

const projectListInitialState = Map({
  isFetching: false
});

export function projectsReducer(state = projectListInitialState, action) {
  switch(action.type) {

    case PROJECT_LIST_REQUEST: {
      return state.set('isFetching', true);
    }

    case PROJECT_LIST_SUCCESS: {
      return state.set('isFetching', false);
    }

    default: {
      return state;
    }
  }
}
