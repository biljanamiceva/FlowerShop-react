import React, { useState } from "react";
import "./MyCarousel.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const MyCarousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  return (
    <div className="card-carousel section__padding app__wrapper">
      <div className="card-carousel-container">
        <div className="card-container-top">
          <div className="card-top">
            <img src={cards[currentIndex].imgface} alt="img" />
            <div className="card-content">
              <h3>{cards[currentIndex].name}</h3>
              <p>{cards[currentIndex].time}</p>
            </div>
          </div>
          <div className="card-body">
            <p>{cards[currentIndex].desc}</p>
          </div>
        </div>

        <div className="card-carousel-right">
          <img src={cards[currentIndex].imgUrl} alt="img" />
        </div>
      </div>
      <div className="carousel-controls">
        <BsArrowLeftCircle onClick={handlePrev} />
        <BsArrowRightCircle onClick={handleNext} />
      </div>
    </div>
  );
};

export default MyCarousel;
