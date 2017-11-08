import React, { Component } from 'react';
import axios from 'axios'
import Table from 'react-bootstrap/lib/Table'
import { Link } from 'react-router-dom'

class Xaps extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {}
  }

  componentDidMount() {
    axios
      .get(this.props.xapUrl)
      .then(this.successAjaxHandler)
  }

  successAjaxHandler = (res) => {
    this.setState({data: res.data})
  }

  renderTable(data) {
    if (data) {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>uuid</th>
            <th>verison</th>
          </tr>
        </thead>
        <tbody>
         {this.renderRows(data.dependencies.component)}
        </tbody>
      </Table>
    )
    }
  }

  renderRows(data) {
    return data.map(d => {
      const parsed = JSON.parse(d.class)
      const to = `${this.props.componentBase}${parsed.uuid}`
      console.log(to)
      return (
        <tr>
          <td><Link to={to}>{parsed.uuid}</Link></td>
          <td>{parsed.version}</td>
        </tr>
      )
    })
  }


  render() {
    return (
      <div>
      <h1> {this.state.data && this.state.data.name} </h1>
      {this.renderTable(this.state.data)}
      </div>
    )
  }
}

export default Xaps
