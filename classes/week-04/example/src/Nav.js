import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';

class Nav extends Component {
  render() {
    return (
      <AppBar>
        <div><Link to="people">People</Link></div>
        <div><Link to="ajax">Ajax</Link></div>
      </AppBar>
    )
  }
}

export default Nav
