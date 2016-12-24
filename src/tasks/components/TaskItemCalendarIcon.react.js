import { connect } from 'react-redux';
import React, { Component, PropTypes as RPT } from 'react';
import { updateTask } from '../actions';
import { Icon } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import moment from 'moment';

class CalendarIcon extends Component {
  static propTypes = {
    onClick: RPT.func,
    dueDate: RPT.string,
    value:   RPT.string
  }

  render() {
    const { dueDate } = this.props;

    let indicator = {color:'green', name: 'add'};

    if (dueDate) {
      indicator = {color: 'blue', name: 'circle'};
    }

    return (
      <Icon.Group onClick={this.props.onClick}>
        <Icon name='calendar' />
        <Icon corner  { ...indicator } />
      </Icon.Group>
    );
  }
}

class TaskItemCalendarIcon extends Component {

  static propTypes = {
    task: RPT.any.isRequired
  }

  changeHandler = (dueDate) => {
    const { task, task: { attributes }, dispatch } = this.props;

    attributes['due-date'] = dueDate.format('YYYY-MM-DD');

    dispatch(updateTask(task));
  }

  render() {
    const { task: { attributes } } = this.props;

    const props = {};

    if (attributes['due-date']) {
      props.selected = moment(attributes['due-date']);
    }

    return (
      <DatePicker
        {...props}
        customInput={<CalendarIcon dueDate={attributes['due-date']} />}
        minDate={moment()}
        onChange={this.changeHandler}
      />
    );
  }
}

export default connect()(TaskItemCalendarIcon);
