import React from "react";
import "./Testimonials.css";
import App from "../../components/Carousel/App";

export const Testimonials = () => {
  return (
    <div className="app__testimonials app__bg flex__center ">
      <div className="app__testimonials-heading">
        <h1>What our clients say about us</h1>
      </div>
      <App />
    </div>
  );
};
