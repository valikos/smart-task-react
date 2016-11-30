import React, { Component } from 'react';
import { Table, Checkbox, Icon } from 'semantic-ui-react'

export default class DummyTasks extends Component {
  render() {
    return (
      <Table selectable structured basic='very'>
        <Table.Body>
        <Table.Row>
          <Table.Cell collapsing>
            <Checkbox />
          </Table.Cell>
          <Table.Cell>Task 1</Table.Cell>
          <Table.Cell collapsing>
            <Icon name='resize vertical' />
            <Icon name='write' />
            <Icon name='trash outline' />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell collapsing>
            <Checkbox />
          </Table.Cell>
          <Table.Cell>Task 2</Table.Cell>
          <Table.Cell collapsing>
            <Icon name='resize vertical' />
            <Icon name='write' />
            <Icon name='trash outline' />
          </Table.Cell>
        </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}
