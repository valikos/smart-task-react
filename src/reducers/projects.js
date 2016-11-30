import { List, Map } from 'immutable';

const initialState = List([
  Map({id: 1, title: 'Project 1'}),
  Map({id: 2, title: 'Project 2'}),
  Map({id: 3, title: 'Project 3'}),
  Map({id: 4, title: 'Project 4'}),
  Map({id: 5, title: 'Project 5'})
]);

export default function projectReducer(state = initialState, action) {

  switch(action.type) {
    case 'ADD_PROJECT':
      return state.push(Map(action.payload));
    // case 'UPDATE_PROJECT':

    // case 'DELETE_PROJECT':
  }

  return state;
}

