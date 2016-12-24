import { reset } from 'redux-form'
import { updateTask } from '../actions';
import { closeEditTaskModal } from '../../ui/actions';

export default function submit(values, dispatch) {
  const { title, entity: { id, type } } = values;

  const entity = {
    type,
    id,
    attributes: {
      title
    }
  };

  dispatch(updateTask(entity));
  dispatch(reset('editTaskForm'));
  dispatch(closeEditTaskModal());
}
