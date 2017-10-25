import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';

const Header = () => {
  return (
    <AppBar title="Sweet AppBARBRO!">
      <Link to="/people">People</Link>
      <Link to="/profile">Profile</Link>
    </AppBar>
  )
}

export default Header

