import React from "react";
import "./AdminNavbar.css";
//import { useState } from "react";
import { GiHamburgerMenu, GiVineFlower } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
const AdminNavbar = () => {
  // const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="app__admin_navbar">
      <nav className="app__admin-navbar">
        <div className="app__admin-navbar-logosec">
          <div className="app__admin-navbar-logo">
            <a href="/">
              Flora Connect <GiVineFlower style={{ marginLeft: "9px" }} />
            </a>
          </div>
          <GiHamburgerMenu
            className="hamburgerMenu"
            // onClick={() => setToggleMenu(true)}
          />
        </div>

        <div className="app__admin-navbar-searchbar">
          <input type="text" placeholder="Search" />
          <div className="searchbtn">
            <BiSearch color="#fafaff" fontSize={27} />
          </div>
        </div>

        <div className="message">
          <div className="circle"></div>
          <BsBell color="#545454" fontSize={27} />
        </div>
      </nav>
    </div>
  );
};

export default AdminNavbar;
