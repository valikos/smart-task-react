import { List } from 'immutable';

const initialState = List([]);

export default function projectReducer(state = initialState, action) {
  switch(action.type) {
    default: {
      return state;
    }
  }
}
