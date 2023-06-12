import React, { useState } from "react";
import "./Shop.css";
import {
  Navbar,
  Footer,
  SearchBar,
  Dropdown,
  EmptyList,
  RangeSlider,
  Card,
} from "../../components";

import { data } from "../../constants";
import images from "../../constants/images";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [maxPrice, setMaxPrice] = useState(5000);

  const cities = [...new Set(data.catalog.map((catalog) => catalog.city))];

  const filteredCatalog = data.catalog.filter(
    (catalog) =>
      (catalog.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        catalog.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        catalog.city.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedCity === "" || catalog.city === selectedCity) &&
      (maxPrice === "" || catalog.price <= maxPrice)
  );
  const handleClear = () => {
    setSearchQuery("");
    setSelectedCity("");
    setMaxPrice(5000);
  };

  return (
    <div className="app__bg-shop">
      <Navbar />
      <div className="app__shop app__bg flex__center section__padding">
        <div className="app__shop-heading ">
          <div className="search-bar">
            <SearchBar
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Dropdown
              options={cities}
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            />
          </div>

          <div className="price-input-container">
            <div className="price-input-border">
              <RangeSlider
                min={0}
                max={5000}
                step={50}
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>

            <button className="clear-button" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <div className="app__shop-cards">
          {filteredCatalog.length === 0 ? (
            <EmptyList />
          ) : (
            filteredCatalog.map((catalog) => (
              <a href={`/card/${catalog.catalogId}`}>
                <Card
                  imgUrl={catalog.imgUrl}
                  name={catalog.name}
                  price={catalog.price}
                  city={catalog.city}
                  companyName={catalog.companyName}
                  key={catalog.catalogId}
                />
              </a>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
