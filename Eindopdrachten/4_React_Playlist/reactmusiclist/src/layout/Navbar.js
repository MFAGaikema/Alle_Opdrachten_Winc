import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
    <ul>
      <li className="link" >
        <Link to="/">
          Home
        </Link>
      </li>
      <li className="link">
        <Link to="/about">
          About
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar
