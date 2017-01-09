import * as actions from './actions';
import { Map } from 'immutable';

const projectListInitialState = Map({
  isFetching: false
});

export function projectsReducer(state = projectListInitialState, action) {
  switch(action.type) {

    case actions.PROJECT_LIST_REQUEST: {
      return state.update('isFetching', isFetching => true);
    }

    case actions.PROJECT_LIST_SUCCESS: {
      return state.update('isFetching', isFetching => false);
    }

    default: {
      return state;
    }
  }
}
