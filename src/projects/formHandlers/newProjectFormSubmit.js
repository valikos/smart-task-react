import { reset } from 'redux-form'
import { createProject } from '../actions';
import { closeNewProjectModal } from '../../ui/actions';

export default function submit(values, dispatch) {
  const entity = {
    type: 'projects',
    attributes: {
      title: values.title
    },
  };

  dispatch(createProject(entity));
  dispatch(reset('newProjectForm'));
  dispatch(closeNewProjectModal());
}
