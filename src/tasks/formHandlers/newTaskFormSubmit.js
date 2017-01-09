import { reset, change, startSubmit, stopSubmit } from 'redux-form'
import { createTask } from '../actions';

export default function submit(values, dispatch) {
  const { project, title } = values;

  const entity = {
    type: 'tasks',
    attributes: {
      title: title
    },
    relationships: {
      project: {
        data: {
          type: 'projects',
          id: project.id
        }
      }
    }
  };

  const submittedForm = `NewProject${project.id}TaskForm`;

  dispatch(startSubmit(submittedForm));
  dispatch(createTask(entity)).then(() => {
    dispatch(reset(submittedForm));
    dispatch(stopSubmit(submittedForm));
    dispatch(change(submittedForm, 'project', project));
  });
}
