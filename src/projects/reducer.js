import * as actions from './actions';
import { Map } from 'immutable';

const initialState = Map({
  isFetching: false
});

export default function projectsReducer(state = initialState, action) {
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
