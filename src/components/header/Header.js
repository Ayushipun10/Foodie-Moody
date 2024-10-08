import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import logo from "../../../Images/logo.jpeg";
import { FaSearch } from "react-icons/fa";
import { CgPokemon } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Search from "../search/search";
import { Link } from "react-router-dom";
import useRestaurantCardData from "../../utils/hooks/useRestaurantCardData";
import UserContext from "../../utils/context/UserContext";
import { useSelector } from "react-redux";
import "../../../src/index.css";

const Header = ({ setInputSearchValue, setListChanged }) => {
  const [loginButton, setLoginButton] = useState("Login");
  // const [searchHeading, setSearchHeading] = useState("Search");
  const [showComponent, setShowComponent] = useState(true);
  const [searchTextValue, setSearchTextProps] = useState("");

  const listofRestaurant = useRestaurantCardData();

  const { loggedInUser } = useContext(UserContext);

  const CartItems = useSelector((store) => store.cart.items);

  console.log("cartitems", CartItems);

  function login() {
    loginButton === "Login"
      ? setLoginButton(loggedInUser)
      : setLoginButton("Login");
  }

  const searchFilter = () => {
    setShowComponent(!showComponent);
    // searchHeading === "Search"
    //   ? setSearchHeading("")
    //   : setSearchHeading("Search");

    const searching = listofRestaurant.filter((item) =>
      item.info.name.toLowerCase().includes(searchTextValue.toLowerCase())
    );

    setListChanged(searching);
    setSearchTextProps("");

    // setInputSearchValue(searchTextValue);
  };
  return (
    <>
      <header className="header-styling">
        <Link to="/">
          <img src={logo} className="logo-styling" />
        </Link>
        <div className="nav-container">
          <li className="nav-items ">
            {showComponent && (
              <Search setSearchTextProps={setSearchTextProps} />
            )}
            {<FaSearch onClick={searchFilter} />}Search{" "}
          </li>
          <li className="nav-items ">
            <Link to="/help">{<CgPokemon />}Help</Link>
          </li>
          <li className="nav-items" onClick={() => login()}>
            {<FaRegUser />}
            {loginButton}
          </li>
          <li className="nav-items">
            <Link to="/cart">
              {<IoCartOutline />}Cart-{CartItems.length} items
            </Link>
          </li>
        </div>
      </header>
    </>
  );
};

export default Header;

// import React, { useContext, useState } from "react";
// import "./Header.css";
// import logo from "../../../Images/logo.jpeg";
// import { FaSearch, FaRegUser } from "react-icons/fa";
// import { CgPokemon } from "react-icons/cg";
// import { IoCartOutline } from "react-icons/io5";
// import Search from "../search/search";
// import { Link } from "react-router-dom";
// import useRestaurantCardData from "../../utils/hooks/useRestaurantCardData";
// import UserContext from "../../utils/context/UserContext";
// import { useSelector } from "react-redux";

// const Header = ({ setInputSearchValue, setListChanged }) => {
//   const [loginButton, setLoginButton] = useState("Login");
//   const [searchTextValue, setSearchTextProps] = useState("");

//   const listofRestaurant = useRestaurantCardData();
//   const { loggedInUser } = useContext(UserContext);
//   const CartItems = useSelector((store) => store.cart.items);

//   function login() {
//     setLoginButton((prevButton) =>
//       prevButton === "Login" ? loggedInUser : "Login"
//     );
//   }

//   const searchFilter = () => {
//     const searching = listofRestaurant.filter((item) =>
//       item.info.name.toLowerCase().includes(searchTextValue.toLowerCase())
//     );

//     setListChanged(searching);
//     setSearchTextProps("");
//   };

//   return (
//     <header className="header-styling">
//       <Link to="/">
//         <img src={logo} className="logo-styling" alt="Logo" />
//       </Link>
//       <div className="nav-container">
//         <li className="nav-items">
//           <Search setSearchTextProps={setSearchTextProps} />
//           <FaSearch onClick={searchFilter} />
//         </li>
//         <li className="nav-items">
//           <Link to="/help">
//             <CgPokemon /> Help
//           </Link>
//         </li>
//         <li className="nav-items" onClick={login}>
//           <FaRegUser /> {loginButton}
//         </li>
//         <li className="nav-items">
//           <Link to="/cart">
//             <IoCartOutline /> Cart-{CartItems.length} items
//           </Link>
//         </li>
//       </div>
//     </header>
//   );
// };

// export default Header;
