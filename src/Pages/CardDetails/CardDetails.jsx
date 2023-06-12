import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../constants";
import "./CardDetails.css";
import { Navbar } from "../../components";

const CardDetails = () => {
  const [count, setCount] = useState(0);
  const { catalogId } = useParams();
  console.log(catalogId);

  const catalogItem = data.catalog.find(
    (catalog) => catalog.catalogId === catalogId
  );

  if (!catalogItem) {
    return <div>Card not found</div>;
  }

  const { imgUrl, name, price, companyName, city } = catalogItem;

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="app__bg app__cardDetails flex__center section__padding">
        <div className="app__cardDetails-img">
          <img src={imgUrl} alt="card_img" />
        </div>
        <div className="app__cardDetails_info">
          <div className="app__cardDetails-heading">
            <h1>{name}</h1>
          </div>
          <div className="app__cardDetails-content">
            <p>Flower Shop: {companyName}</p>
            <p>City: {city}</p>
            <p>Price: {price} denari</p>
          </div>
          <div className="app__cardDetails-button ">
            <div className="counter">
              <p> {count}</p>
              <button onClick={decrement}>-</button>
              <button onClick={increment}>+</button>
            </div>
            <button style={{ marginLeft: "15px" }} className="custom__button">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
