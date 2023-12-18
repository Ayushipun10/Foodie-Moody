import React from 'react';
import "./style.css"
import logo from '../../../Images/logo.jpeg'
import { FaSearch } from "react-icons/fa";
import { CgPokemon } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";


const Header = () => {
  return (
    <header className='header-styling'>
        <img src={logo} className='logo-styling'/>
        <nav > 
        <a className='nav-items href="#'>{<FaSearch />} Search</a>
        <a className='nav-items'>{<CgPokemon />} Help</a>
        <a className='nav-items'>{<FaRegUser />} Username</a>
        <a className='nav-items'>{<IoCartOutline />} Cart</a>
        </nav>
        
        
    </header>
  )
}

export default Header