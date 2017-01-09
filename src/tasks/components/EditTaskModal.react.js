import React, { Component, PropTypes as RPT } from 'react';
import { connect } from 'react-redux';
import { submit, isSubmitting } from 'redux-form';
import { Button, Modal, Icon } from 'semantic-ui-react';
import EditTaskForm from './EditTaskForm.react';
import { openEditTaskModal, closeEditTaskModal } from '../../ui/actions';

const mapStateToProps = (state) => {
  return {
    isSubmitting: isSubmitting('editTaskForm')(state),
    isEditTaskModalOpen: state.ui.get('isEditTaskModalOpen')
  }
};

class EditTaskModal extends Component {

  state = {
    showModal: false
  }

  static propTypes = {
    task: RPT.any.isRequired
  }

  componentWillReceiveProps(nextProps) {
    const { showModal } = this.state;
    const { isEditTaskModalOpen } = this.props;

    if (showModal && isEditTaskModalOpen && !nextProps.isEditTaskModalOpen)
      this.setState({showModal: false});
  }

  handleOpen() {
    const { dispatch } = this.props;

    dispatch(openEditTaskModal());
    this.setState({ showModal: true });
  }

  handleClose() {;
    const { dispatch } = this.props;

    dispatch(closeEditTaskModal());
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    const { dispatch, task, isSubmitting } = this.props;

    return (
      <Modal
        open={showModal}
        size='small'
        dimmer='blurring'
        trigger={<Icon name='write' />}
        onOpen={this.handleOpen.bind(this)}
      >
        <Modal.Header>Edit Task</Modal.Header>
        <Modal.Content>
          <EditTaskForm task={task} />
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={this.handleClose.bind(this)}>Cancel</Button>
          <Button
            positive
            labelPosition='right'
            icon='checkmark'
            content='Submit'
            disabled={isSubmitting}
            loading={isSubmitting}
            onClick={() => dispatch(submit('editTaskForm'))}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default connect(mapStateToProps)(EditTaskModal);
