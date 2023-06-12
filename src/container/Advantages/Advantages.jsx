import React from "react";
import "./Advantages.css";
import { BsStar } from "react-icons/bs";
import { MdOutlineContactSupport } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";
const Advantages = () => {
  return (
    <div className="app__advantages app__bg flex__center section__padding">
      <div className="app__advantages-heading">
        <h1>Our Advantages</h1>
      </div>
      <div className="app__advantages-p flex__center">
        <p className="p__opensans">
          Everyday we work hard to make life of our clients better and happier.
        </p>
      </div>
      <div className="app__advantages-info">
        <ul className="app__advantages-info-ul">
          <div className="app__advantages-box">
            <BsStar />
            <h5>Quality</h5>
            <p className="app__advantages-box-p">
              Our professionals have more than 5 years of legal experiences
            </p>
          </div>
          <div className="app__advantages-box">
            <MdOutlineContactSupport />
            <h5>Support</h5>
            <p className="app__advantages-box-p">
              We offer you professional consultation of our specialist in 30
              min.
            </p>
          </div>
          <div className="app__advantages-box">
            <GrDeliver />
            <h5>Delivery</h5>
            <p className="app__advantages-box-p">
              Free delivery when you order over 6000 den.
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Advantages;
