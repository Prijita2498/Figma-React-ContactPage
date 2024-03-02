import React from 'react';
import Logo from './../assets/Images/Logo.png';
import './Header.css'

function Header() {
  return (
    <div className='nav-container'>
        <div>
            <img src={Logo} alt="Logo"/>
        </div>

        <ul className='nav-items'>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
    </div>
  )
}

export default Header