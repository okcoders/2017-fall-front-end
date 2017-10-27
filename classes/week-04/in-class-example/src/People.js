import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { map, get } from 'lodash'
import axios from 'axios';
import CircularProgress from 'material-ui/CircularProgress';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class People extends Component {
  constructor(props) {
    console.log("constructor")
    super(props)
    this.state = {
      loggedIn: false,
      name: 'zach',
      counter: 0,
      error: false,
      responseData: null,
      people: [
        {name: 'Zach'},
        {name: 'Bertrand'},
        {name: 'Steven'},
        {name: 'Susan'}
      ]
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    console.log("componentWillMount")
  }

  componentDidMount() {
    console.log("componentDidMount")
    this.getPostData()
  }

  getPostData() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((data) => {for(let x=0; x < 100000; x++){}; return data})
      .then(this.ajaxSuccess)
      .catch(() => this.setState({error: true}))
  }

  ajaxSuccess = (response) => {
    console.log("success")
    this.setState({error: false, responseData: response})
  }

  shouldComponentUpdate() {
    console.log("componentShouldUpdate")
    return true
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("componentWillUnMount")
  }

  handleClick() {
    this.setState((prevState) => {
      return { loggedIn: true, counter: prevState.counter + 1}
    })
  }

  userInfo() {
    if (this.state.loggedIn) {
      return <h1> You are logged in </h1>
    } else {
      return <h1> you should login! </h1>
    }
  }

  showPeople() {
    return map(this.state.people, p => {
      return <h1 key={p.name}>hello! {p.name}</h1>
    })
  }

  showPosts() {
    const responseData = get(this.state, 'responseData.data')
    if (responseData) {
      return this.makePostDataTable(responseData)
    } else {
      return !this.state.error && <CircularProgress />
    }
  }

  makePostDataTable(data) {
    return (
      <Table>
      <TableHeader>
      <TableRow>
      <TableHeaderColumn>User ID</TableHeaderColumn>
      <TableHeaderColumn>ID</TableHeaderColumn>
      <TableHeaderColumn>Title</TableHeaderColumn>
      <TableHeaderColumn>Body</TableHeaderColumn>
      </TableRow>
      </TableHeader>
      <TableBody>
       {this.makePostDataRowElems(data)}
      </TableBody>
      </Table>
    )
  }

  makePostDataRowElems(data) {
    return map(data, d => {
      return (
        <TableRow>
        <TableRowColumn>{d.userId}</TableRowColumn>
        <TableRowColumn>{d.id}</TableRowColumn>
        <TableRowColumn>{d.title}</TableRowColumn>
        <TableRowColumn>{d.body}</TableRowColumn>
        </TableRow>
      )
    })
  }

  render() {
    console.log("render")
    console.log(this.showPeople())
    const userElem = this.userInfo()
    return (
      <div>
        {this.state.loggedIn && <h2>this.state.name</h2>}
        {userElem}
        {this.userInfo()}
        <h1> People! {this.state.counter} </h1>
        <RaisedButton onClick={this.handleClick} label="Update State!" />
        {this.state.error && <h1> error! </h1>}
        {this.showPosts()}
      </div>
    )
  }
}

export default People
