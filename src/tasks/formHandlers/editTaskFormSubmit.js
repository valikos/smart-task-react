import { reset, startSubmit, stopSubmit } from 'redux-form'
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

  dispatch(startSubmit('editTaskForm'));
  dispatch(updateTask(entity)).then(() => {
    dispatch(reset('editTaskForm'));
    dispatch(stopSubmit('editTaskForm'));
    dispatch(closeEditTaskModal());
  });
}
