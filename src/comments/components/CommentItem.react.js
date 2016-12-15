import React, { Component, PropTypes as RPT } from 'react';
import { Comment, Icon } from 'semantic-ui-react';
import RemoveCommentIcon from './RemoveCommentIcon.react';
import moment from 'moment';

export default class CommentItem extends Component {

  static propTypes = {
    comment: RPT.any.isRequired
  };

  renderPublishDate() {
    const { comment: { attributes } } = this.props;

    return moment.utc(attributes['created-at']).format('lll')
  }

  render() {
    const { comment, comment: { attributes } } = this.props;

    return (
      <Comment>
        <Comment.Content>
          <Comment.Metadata>
            <div>{this.renderPublishDate(this)}</div>
          </Comment.Metadata>
          <Comment.Text>
            {attributes.body}
          </Comment.Text>
          <Comment.Actions>
            <RemoveCommentIcon comment={comment} />
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    );
  }
}
