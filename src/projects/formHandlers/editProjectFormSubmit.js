import { reset } from 'redux-form'
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

  dispatch(updateProject(entity));
  dispatch(reset('editProjectForm'));
  dispatch(closeEditProjectModal());
}
