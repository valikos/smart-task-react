import { connect } from 'react-redux';
import { reset } from 'redux-form';

import projectComponents from '../../projects/components';
import { addProject } from '../../projects/actions';

const { NewProjectForm } = projectComponents;

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProject: (fields) => {
      dispatch(addProject(fields));
    }
  }
}

export default connect(mapStateToProps)(NewProjectForm);
