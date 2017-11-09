import React, { Component } from 'react'
import { shallow, mount } from 'enzyme'
// import Xaps from './Xaps'

// const mockState = {
//   user: "Zach",
//   xapUrl: "https://exaptive.city/api/v1/xaps/efa507b0-76f3-11e7-a0fe-d7ef23f2c0f6/spec.json",
//   componentBase: "https://exaptive.city/api/v1/components/"
// }

// describe("<Xaps>", () => {
//   it("should say hello", () => {
//     const wrapper = mount(<Xaps {...mockState} />)
//   })
// })



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
