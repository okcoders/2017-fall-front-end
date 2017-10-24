import React, { Component } from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { map } from 'lodash'

class People extends Component {
  constructor(props) {
    super(props)
    this.state = { sampleData: [
      { firstName: 'Bertrand', lastName: 'Russell' },
      { firstName: 'Fyodor', lastName: 'Dostoevsky' },
    ] }
  }

  componentWillMount() {
    console.log("componentWillMount")
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps")
  }

  componentWillUpdate() {
    console.log("componentWillUpdate")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  table(rows) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>First Name</TableHeaderColumn>
            <TableHeaderColumn>Last Name</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
         { rows }
        </TableBody>
      </Table>
    )
  }

  rows(data) {
    return map(data, r => {
      return (
        <TableRow>
          <TableRowColumn>{r.firstName}</TableRowColumn>
          <TableRowColumn>{r.lastName}</TableRowColumn>
        </TableRow>
      )
    })
  }

  render() {
    return (
      this.table(this.rows(this.state.sampleData))
    )
  }
}

export default People
