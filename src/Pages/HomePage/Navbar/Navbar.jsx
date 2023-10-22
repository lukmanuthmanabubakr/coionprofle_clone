import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbarSec'>
        <div>
            <p className='brandName'>coinprofile</p>
        </div>
        <div>
            <NavLink>
                Get Started
          </NavLink>
        </div>
    </div>
  )
}

export default Navbar