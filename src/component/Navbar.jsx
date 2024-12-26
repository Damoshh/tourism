import React, { useState } from 'react'
import logo from '../assets/profile.png'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

function Navbar() {

  const [openLinks, setOPenLinks] = useState(false)

  const toggleNavbar = () => {
    setOPenLinks(!openLinks)
  }

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img src={logo}/>
            <div className='hiddenLinks'>
              <Link to='/'> HOMEs </Link>
              <Link to='/menu'> Menu </Link>
              <Link to='/about'> About </Link>
              <Link to='/contact'> Contact </Link>
            </div>
            
        </div>
        <div className='rightSide'>
            <Link to='/'> Home </Link>
            <Link to='/menu'> Menu </Link>
            <Link to='/about'> About </Link>
            <Link to='/contact'> Contact </Link>
            <button onClick={toggleNavbar}>
                <ReorderIcon/>
            </button>
        </div>
    </div>
  );
}

export default Navbar
