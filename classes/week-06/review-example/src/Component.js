import React, { Component } from 'react';

class ExaptiveComponent extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {}
  }

  render() {
    return (
      <div>
      <h1> hello! </h1>
      </div>
    )
  }
}

export default ExaptiveComponent
