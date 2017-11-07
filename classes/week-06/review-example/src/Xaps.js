import React, { Component } from 'react';
import axios from 'axios'
import Table from 'react-bootstrap/lib/Table';
import { Link } from 'react-router-dom'

class Xaps extends Component {
  constructor(props) {
    super(props)
    console.log("xaps props", props)
    this.state = {}
  }

  componentDidMount() {
    axios
      .get(this.props.xapUrl)
      .then(this.handleSuccess)
  }

  handleSuccess = (resp) => {
    console.log(resp)
    this.setState({ data: resp.data })
  }

  renderTable(data) {
    if (data) {
      return (
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Link</th>
              <th>Version</th>
            </tr>
          </thead>
          <tbody>
        {this.makeRows(data.dependencies.component)}
          </tbody>
        </Table>
      )
    }
  }

  makeRows(data) {
    return data.map(i => {
      const parsed = JSON.parse(i.class)
      console.log(parsed)
      return (<tr>
        <td><Link to={`/component/${parsed.uuid}`}>component!</Link></td>
        <td>{parsed.version}</td>
      </tr>
    )
    })
  }

  render() {
    return (
      <div>
      <h1> hello! </h1>
      {this.renderTable(this.state.data)}
      </div>
    )
  }
}

export default Xaps
