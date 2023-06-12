import React from "react";
import "./Footer.css";
import { GiVineFlower } from "react-icons/gi";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">LINK 1</p>
          <p className="p__opensans">LINK 1</p>
          <p className="p__opensans">LINK 1</p>
        </div>

        <div className="app__footer-links_logo">
          <div className="app__footer-logo">
            <a href="home">
              Flora Connect <GiVineFlower style={{ marginLeft: "9px" }} />
            </a>
          </div>

          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am - 12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00 am - 11:00 pm</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">&copy;Flora Connect 2023</p>
      </div>
    </div>
  );
};

export default Footer;
