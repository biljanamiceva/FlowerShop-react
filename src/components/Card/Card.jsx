import React from "react";
import "./Card.css";
// import { MdLocationPin } from "react-icons/md";

const Card = ({ imgUrl, name, price, companyName, city }) => {
  return (
    <div className="app__shop-card">
      <div className="card-shop">
        <img src={imgUrl} alt="bestseller_img" />

        <div className="app__shop-card_content">
          <p>{name}</p>
          <p>{price} denari</p>
        </div>
        <div className="app__shop-card_footer">
          <span>
            {/* <span>
              <MdLocationPin />
            </span> */}
            {city}
          </span>
          <span>{companyName}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
