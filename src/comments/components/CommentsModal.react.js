import React, { Component, PropTypes as RPT } from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { Header, Form, Button, Modal, Icon, Comment } from 'semantic-ui-react';
import CommentList from './CommentList.react';
import NewCommentForm from './NewCommentForm.react';

class CommentsModal extends Component {
  static propTypes = {
    task: RPT.any.isRequired
  };

  state = {
    showModal: false
  };

  handleOpen() {
    const { dispatch } = this.props;

    // dispatch(openEditProjectModal());
    this.setState({ showModal: true });
  }

  handleClose() {;
    const { dispatch } = this.props;

    // dispatch(closeEditProjectModal());
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    const { dispatch, task } = this.props;

    return (
      <Modal
        open={showModal}
        size='small'
        dimmer='blurring'
        trigger={<Icon name='comments' />}
        onOpen={this.handleOpen.bind(this)}
      >
        <Header as='h2'>
          <Icon name='comments' />
          <Header.Content>
            Task Comments
            <Header.Subheader>
              {task.attributes.title}
            </Header.Subheader>
          </Header.Content>
        </Header>

        <Modal.Content>
          <CommentList task={task} />

          <NewCommentForm task={task} />
        </Modal.Content>
        <Modal.Actions>
          <Button
            negative
            onClick={this.handleClose.bind(this)}
          >
            Cancel
          </Button>
          <Button
            content='Add Comment'
            labelPosition='right'
            icon='edit'
            positive
            onClick={() => dispatch(submit('newCommentForm'))}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default connect()(CommentsModal);
