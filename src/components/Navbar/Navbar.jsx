import React, { useState } from "react";
import { GiHamburgerMenu, GiVineFlower } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./Navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/">
          Flora Connect <GiVineFlower style={{ marginLeft: "9px" }} />
        </a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="/">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="/shop">Shop</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="/login" className="p__opensans">
          Log In
        </a>
        <div />
        <a href="/register" className="p__opensans">
          Registration
        </a>
        <a href="/shoppingCart" className="p__opensans">
          <MdOutlineShoppingCart fontSize={24} />
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#545454"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="/" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="/shop" onClick={() => setToggleMenu(false)}>
                  Shop
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
              <div className="app__navbar-smallscreen-div">
                <li>
                  <a href="/login" onClick={() => setToggleMenu(false)}>
                    Log In
                  </a>
                </li>
                <li>
                  <a href="/register" onClick={() => setToggleMenu(false)}>
                    Sign up
                  </a>
                </li>
                <li>
                  <a href="/shoppingCart" onClick={() => setToggleMenu(false)}>
                    Shopping Cart
                  </a>
                </li>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
