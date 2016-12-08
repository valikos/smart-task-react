import * as actions from './actions';
import { Map } from 'immutable';

const initialState = Map({
  isNewProjectModalOpen:       false,
  isEditProjectModalOpen: false
});

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case actions.OPEN_NEW_PROJECT_MODAL: {
      return state.set('isNewProjectModalOpen', true);
    }

    case actions.CLOSE_NEW_PROJECT_MODAL: {
      return state.set('isNewProjectModalOpen', false);
    }

    case actions.OPEN_EDIT_PROJECT_MODAL: {
      return state.set('isEditProjectModalOpen', true);
    }

    case actions.CLOSE_EDIT_PROJECT_MODAL: {
      return state.set('isEditProjectModalOpen', false);
    }

    default: {
      return state;
    }
  }
}
