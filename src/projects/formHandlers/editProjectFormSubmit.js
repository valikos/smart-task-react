import { reset, startSubmit, stopSubmit } from 'redux-form'
import { updateProject } from '../actions';
import { closeEditProjectModal } from '../../ui/actions';

export default function submit(values, dispatch) {
  const { title } = values;
  const entity = {
    type: values.entity.type,
    id: values.entity.id,
    attributes: {
      title
    }
  };

  dispatch(startSubmit('editProjectForm'));
  dispatch(updateProject(entity)).then(() => {
    dispatch(reset('editProjectForm'));
    dispatch(stopSubmit('editProjectForm'));
    dispatch(closeEditProjectModal());
  });
}
