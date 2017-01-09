import { reset, change, startSubmit, stopSubmit } from 'redux-form'
import { createComment } from '../actions';

export default function submit(values, dispatch) {
  const { task, body } = values;

  const entity = {
    type: 'comments',
    attributes: {
      body: body
    },
    relationships: {
      task: {
        data: {
          type: 'tasks',
          id: task.id
        }
      }
    }
  };

  const submittedForm = 'newCommentForm';

  dispatch(startSubmit(submittedForm));
  dispatch(createComment(entity)).then(() => {
    dispatch(reset(submittedForm));
    dispatch(stopSubmit(submittedForm));
    dispatch(change(submittedForm, 'task', task));
  });
}