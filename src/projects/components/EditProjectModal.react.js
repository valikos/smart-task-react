import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { Button, Modal, Icon } from 'semantic-ui-react';
import EditProjectForm from './EditProjectForm.react';
import { openEditProjectModal, closeEditProjectModal } from '../../ui/actions';

const mapStateToProps = (state) => {
  return {
    isEditProjectModalOpen: state.ui.get('isEditProjectModalOpen')
  }
}

class EditProjectModal extends Component {

  state = {
    showModal: false
  }

  componentWillReceiveProps(nextProps) {
    const { showModal } = this.state;
    const { isEditProjectModalOpen } = this.props;

    if (showModal && isEditProjectModalOpen && !nextProps.isEditProjectModalOpen)
      this.setState({showModal: false});
  }

  handleOpen() {
    const { dispatch } = this.props;

    dispatch(openEditProjectModal());
    this.setState({ showModal: true });
  }

  handleClose() {;
    const { dispatch } = this.props;

    dispatch(closeEditProjectModal());
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    const { dispatch, project } = this.props;

    return (
      <Modal
        open={showModal}
        size='small'
        dimmer='blurring'
        trigger={<Icon name='write' />}
        onOpen={this.handleOpen.bind(this)}
      >
        <Modal.Header>Edit Project</Modal.Header>
        <Modal.Content>
          <EditProjectForm project={project} />
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={this.handleClose.bind(this)}>Cancel</Button>
          <Button
            positive
            labelPosition='right'
            icon='checkmark'
            content='Submit'
            onClick={() => dispatch(submit('editProjectForm'))}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default connect(mapStateToProps)(EditProjectModal);
