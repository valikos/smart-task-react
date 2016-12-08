import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as api } from 'redux-json-api';
import { reducer as form } from 'redux-form';
import projects from './projects';
import ui from './ui/reducer';

export default combineReducers({
  [projects.constants.NAME]: projects.reducer,
  form,
  routing,
  api,
  ui
});
