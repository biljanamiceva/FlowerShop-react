import React from "react";
import { images } from "../../constants";
import "./Header.css";
const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <h1 className="app__header-h1">
          Creating Meaningful Moments with Flower Connect
        </h1>

        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Discover the beauty of nature's finest blooms at Flora Connect. We
          specialize in creating stunning floral arrangements that are perfect
          for any occasion.
        </p>

        <button type="button" className="custom__button ">
          Explore our Shops
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.home} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
