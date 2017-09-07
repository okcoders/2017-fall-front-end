# Class Based Components

https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes
https://facebook.github.io/react/docs/state-and-lifecycle.html
https://facebook.github.io/react/docs/react-component.html

The second react family member we learn about are class based components. With
these we lose our elegent pure function of ```props => html``` but gain
significanly more power.

The signature for class based components is still ```props => html```, but it is
no longer pure. One could not look at the props and know what the html will be.
One would also have to inspect the state, and any code written into the
lifecycle methods.

Here is a sneak peak, I don't expect any of this to make sense just yet:

```
import React, { Component } from 'react'

class OkCodersExample extends Component {
  constructor(props) {
    super(props)
    this.state = { hello: "world!" }
    // we only do the above in the constructor, anywhere else we use this.setState`
  }

  // all of these are methods we may use for various purposes
  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  shouldComponentUpdate() {
  }

  componentWillUpdate() {
  }

  componentDidUpdate() {
  }

  // we will always use this method to return the "html" for our component
  render() {
    return (
      <h1>Hello {this.state.hello}</h1>
    )
  }
}

```

### State

State is a rather abstract term, but in react it is a specific member of class
based components. We do 2 things with state:

1. initialize state
2. update state

#### Initializing state

Inside our constructor we assign an object with any keys and values we desire.
