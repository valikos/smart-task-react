import { connect } from 'react-redux';
import React, { Component, PropTypes as RPT } from 'react';
import CommentItem from './CommentItem.react';
import { Header, Form, Button, Modal, Icon, Comment } from 'semantic-ui-react';

const mapStateToProps = ({ api: { comments = { data: [] } } }) => ({ comments });

class CommentList extends Component {

  static propTypes = {
    task: RPT.any.isRequired
  }

  renderComments() {
    const { comments, task } = this.props;

    if (comments.data.length === 0)
      return <Container />

    return comments.data.map((comment) => {
      if (comment.relationships.task.data.id === task.id) {
        return <CommentItem key={comment.id} comment={comment} task={task} />
      }
    });
  }

  render() {
    return (
      <Comment.Group>
        {this.renderComments()}
      </Comment.Group>
    )
  }
}

export default connect(mapStateToProps)(CommentList);
