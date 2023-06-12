import React from "react";
import "./Catalog.css";
import { data } from "../../constants";
import { Card } from "../../components/";

const Catalog = () => {
  return (
    <div className="app__catalog app__bg flex__center section__padding">
      <div className="app__catalog-heading">
        <h1>Best sellers</h1>
      </div>

      <div className="app__catalog-cards">
        {data.catalog.map((catalog) => (
          <Card
            imgUrl={catalog.imgUrl}
            name={catalog.name}
            price={catalog.price}
            key={catalog.catalogId}
          />
        ))}
      </div>
      <div className="app__catalog-button">
        <a href="/shop" className="custom__button" type="button">
          See More
        </a>
      </div>
    </div>
  );
};

export default Catalog;
