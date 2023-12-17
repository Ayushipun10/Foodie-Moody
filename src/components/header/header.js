import React from 'react';
import "./style.css"
import logo from '../../../Images/logo.jpeg'


const Header = () => {
  return (
    <header className='header-styling'>
        <img src={logo} className='logo-styling'/>
        <nav > 
        <a className='nav-items href="#'>Search</a>
        <a className='nav-items'>Help</a>
        <a className='nav-items'>Username</a>
        <a className='nav-items'>Cart</a>
        </nav>
        
        
    </header>
  )
}

export default Header