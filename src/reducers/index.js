import { combineReducers }          from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as api }           from 'redux-json-api';
import projects                     from './projects';
import tasks                        from './tasks';
import comments                     from './comments';
import authentications              from './authentications';

const SmartTaskApp = {
  authentications,
  projects,
  tasks,
  comments,
  routing,
  api
};

const combinedReducers = combineReducers(SmartTaskApp)

export default combinedReducers;
