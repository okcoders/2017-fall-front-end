import React, { Component } from 'react'
import { shallow, mount } from 'enzyme'

class TestComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <h1> hello! </h1>
      { this.props.world && <p>{this.props.world}</p> }
      </div>
    )
  }
}

describe("<TestComponent>", () => {
  it("should say hello", () => {
    const wrapper = shallow(<TestComponent />)
    const assert = wrapper.contains((<h1> hello! </h1>))
    const assert2 = wrapper.contains((<p>wow!</p>))
    expect(assert).toBe(true)
    expect(assert2).toBe(false)
  })

  it("should conditionally render based on props", () => {
    const wrapper = shallow(<TestComponent world="wow!" />)
    const assert = wrapper.contains((<p>wow!</p>))
    expect(assert).toBe(true)
  })
})
