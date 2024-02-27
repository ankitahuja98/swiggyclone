import React from 'react'
import Logo_url from "../Images/Mainlogo.avif"
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'

const Navbar = () => {
  const onlinestatus =useOnlineStatus();
  return (
    <div className='navbar'>

      <div className='main_logo'>
        <img src={Logo_url} alt='brand_logo' />
      </div>

      <div className='nav_items'>
        <ul className='d-flex'>
        <li>
          {onlinestatus ? "Online Status 🟢":"Online Status 🔴" }
        </li>
          <li><Link to='/'>
            Home
          </Link></li>
          <li><Link to='/grocery'>
            Grocery
          </Link></li>
          <li><Link to='/about'>
            About
          </Link></li>
          <li><Link to='/contact'>
            Contact
          </Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
