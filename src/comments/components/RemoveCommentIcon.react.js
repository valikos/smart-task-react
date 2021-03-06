import { connect } from 'react-redux';
import React, { Component, PropTypes as RPT } from 'react';
import { Icon } from 'semantic-ui-react';
import { deleteComment } from '../actions';

class RemoveCommentIcon extends Component {

  static propTypes = {
    comment: RPT.any.isRequired
  };

  onClick() {
    const { dispatch, comment } = this.props;

    dispatch(deleteComment(comment));
  }

  render() {
    return <Icon name='trash' onClick={this.onClick.bind(this)} />;
  }
}

export default connect()(RemoveCommentIcon);
