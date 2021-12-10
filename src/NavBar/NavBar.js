import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to={'/vent'}>Vent</NavLink></li>
          <li><NavLink to={'/buttons'}>Buttons</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar