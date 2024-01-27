import React, { useState } from "react";
import "./Header.css";
import logo from "../../../Images/logo.jpeg";
import { FaSearch } from "react-icons/fa";
import { CgPokemon } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Search from "../search/search";
import {Link} from "react-router-dom";

const Header = ({setInputSearchValue}) => {

  
  const [loginButton, setLoginButton] = useState("Login");
  const [searchHeading, setSearchHeading] = useState("Search");
  const [showComponent, setShowComponent] = useState(false);
  const [searchTextValue, setSearchTextProps] = useState("");

  function login() {
    loginButton === "Login"
      ? setLoginButton("Logout")
      : setLoginButton("Login");
   
  }

 
   const searchFilter = () => {
    
    setShowComponent(!showComponent);
    searchHeading === "Search"
      ? setSearchHeading("")
      : setSearchHeading("Search");

    // setInputSearchValue(searchTextValue);
  }
  return (
    <>
      <header className="header-styling">
        <Link to="/"><img src={logo} className="logo-styling" /></Link>
        <div className="nav-container">
          <li className="nav-items">
            {showComponent && <Search setSearchTextProps={setSearchTextProps} />}
            {<FaSearch onClick={searchFilter} />} {searchHeading}{" "}
          </li>
          <li className="nav-items"><Link to="/help">{<CgPokemon />} Help</Link></li>
          <li className="nav-items" onClick={() => login()}>
            {<FaRegUser />}
            {loginButton}
          </li>
          <li className="nav-items"><Link to="/cart">{<IoCartOutline />} Cart</Link></li>
        </div>
      </header>
    </>
  );
};

export default Header;
