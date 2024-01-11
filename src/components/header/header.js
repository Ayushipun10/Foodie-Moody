import React, { useState } from "react";
import "./Header.css";
import logo from "../../../Images/logo.jpeg";
import { FaSearch } from "react-icons/fa";
import { CgPokemon } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Search from "../search/search";

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

    setInputSearchValue(searchTextValue);
  }
  return (
    <>
      <header className="header-styling">
        <img src={logo} className="logo-styling" />
        <nav>
          <a className="nav-items">
            {showComponent && <Search setSearchTextProps={setSearchTextProps} />}
            {<FaSearch onClick={searchFilter} />} {searchHeading}{" "}
          </a>
          <a className="nav-items">{<CgPokemon />} Help</a>
          <a className="nav-items" onClick={() => login()}>
            {<FaRegUser />}
            {loginButton}
          </a>
          <a className="nav-items">{<IoCartOutline />} Cart</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
