import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submit, isSubmitting } from 'redux-form';
import { Button, Modal, Icon } from 'semantic-ui-react';
import NewProjectForm from './NewProjectForm.react';
import { openNewProjectModal, closeNewProjectModal } from '../../ui/actions';

const mapStateToProps = (state) => {
  return {
    isSubmitting: isSubmitting('newProjectForm')(state),
    isNewProjectModalOpen: state.ui.get('isNewProjectModalOpen')
  }
}

class NewProjectModal extends Component {

  state = {
    showModal: false
  }

  componentWillReceiveProps(nextProps) {
    const { showModal } = this.state;
    const { isNewProjectModalOpen } = this.props;

    if (showModal && isNewProjectModalOpen && !nextProps.isNewProjectModalOpen)
      this.setState({showModal: false});
  }

  handleOpen() {
    const { dispatch } = this.props;

    dispatch(openNewProjectModal());
    this.setState({ showModal: true });
  }

  handleClose() {;
    const { dispatch } = this.props;

    dispatch(closeNewProjectModal());
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    const { dispatch, isSubmitting } = this.props;

    return (
      <Modal
        open={showModal}
        size='small'
        dimmer='blurring'
        onOpen={this.handleOpen.bind(this)}
        trigger={<Button color='blue' size='large'><Icon name='plus' /> Add Project</Button>}
      >
        <Modal.Header>Add New Project</Modal.Header>
        <Modal.Content>
          <NewProjectForm />
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
            onClick={() => dispatch(submit('newProjectForm'))}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default connect(mapStateToProps)(NewProjectModal);
