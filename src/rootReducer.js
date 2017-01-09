import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as api } from 'redux-json-api';
import { reducer as form } from 'redux-form';
import * as projectReducers from './projects/reducer';
import ui from './ui/reducer';
import auth from './authentication/reducer';

export default combineReducers({
  projects: projectReducers.projectsReducer,
  auth,
  form,
  routing,
  api,
  ui
});
