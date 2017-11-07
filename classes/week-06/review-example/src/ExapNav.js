import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { withRouter } from 'react-router'

class ExapNav extends Component {
  constructor(props) {
    super(props)
    console.log("called", props)
    this.state = {}
  }

  navigateTo = () => {
    this.props.history.push("/xaps")
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Exaptive</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem onClick={this.navigateTo}>Xaps</NavItem>
          <NavItem href="/test"> test </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export const WithRouterExapNav = withRouter(ExapNav)
export default ExapNav
