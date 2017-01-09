import { reset, startSubmit, stopSubmit } from 'redux-form'
import { createProject } from '../actions';
import { closeNewProjectModal } from '../../ui/actions';

export default function submit(values, dispatch) {
  const entity = {
    type: 'projects',
    attributes: {
      title: values.title
    },
  };

  dispatch(startSubmit('newProjectForm'));
  dispatch(createProject(entity)).then(() => {
    dispatch(reset('newProjectForm'));
    dispatch(stopSubmit('newProjectForm'));
    dispatch(closeNewProjectModal());
  });
}
