import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';

class WithAjax extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      failure: false,
      responseData: null
    }

    this.getData = this.getData.bind(this)
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

  failureElem() {
    return <h1> Oh no! </h1>
  }

  loadingElem() {
    return <h1> loading! </h1>
  }

  responseElem() {
    return <h1> {this.state.responseData} </h1>
  }

  getData() {
    console.log("called!")
    this.setState({loading: true})
    setTimeout(() => {
    this.setState({loading: false})
    this.setState({ responseData: 'woooo!' })
    }, 2000)
  }

  render() {
    return (
      <div>
       <RaisedButton label="Get Data!" onClick={this.getData}/>
       {this.state.failure && this.failureElem()}
       {this.state.loading && this.loadingElem()}
       {!!this.state.responseData && !this.state.loading && this.responseElem()}
      </div>
    )
  }
}

export default WithAjax
