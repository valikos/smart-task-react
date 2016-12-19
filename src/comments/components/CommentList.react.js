import { connect } from 'react-redux';
import React, { Component, PropTypes as RPT } from 'react';
import CommentItem from './CommentItem.react';
import { Header, Comment } from 'semantic-ui-react';

const mapStateToProps = ({ api: { comments = { data: [] } } }) => ({ comments });

class CommentList extends Component {

  static propTypes = {
    task: RPT.any.isRequired
  }

  renderComments() {
    const { comments, task } = this.props;

    const comment_list = comments.data.filter(comment => {
      return comment.relationships.task.data.id === task.id
    }).map(comment => {
      return <CommentItem key={comment.id} comment={comment} task={task} />;
    });

    if (!comment_list.length)
      return <Header block as='h3' content='No comments' textAlign='center' />;

    return comment_list;
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
