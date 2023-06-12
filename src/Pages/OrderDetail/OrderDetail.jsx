import React, { useState } from "react";
import "./OrderDetail.css";
import { Navbar } from "../../components";
import { images } from "../../constants";
const OrderDetail = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Navbar />

      <div className="app__bg app__payment flex__center section__padding">
        <div className="app__payment-heading">
          <h2>Choose your payment method</h2>
        </div>
        <div className="app__payment-method">
          <div
            className={`app__payment-method-input ${
              selectedOption === "Credit Card" ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              value="Credit Card"
              checked={selectedOption === "Credit Card"}
              onChange={handleOptionChange}
            />
            Credit Card
            <img
              className="creditCard"
              src={images.visamastercard}
              alt="cards"
            />
          </div>

          <div
            className={`app__payment-method-input ${
              selectedOption === "Cash" ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              value="Cash"
              checked={selectedOption === "Cash"}
              onChange={handleOptionChange}
            />

            <img
              src={images.cash}
              alt="cards"
              style={{ width: "115px", height: "85px" }}
            />
          </div>
        </div>

        <div className="app__payment-content">
          <div className="app__payment-details">
            <div className="app__payment-heading">
              <h2>Billing details</h2>
              <p>Type in your personal data</p>
            </div>

            <form className="app__payment-details-form">
              <label className="app__payment-form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="app__payment-form-input"
              />
              <label className="app__payment-form-label">Email address</label>
              <input
                type="text"
                name="email"
                className="app__payment-form-input"
              />

              <label className="app__payment-form-label">City</label>
              <input
                type="text"
                name="city"
                className="app__payment-form-input"
              />
              <label className="app__payment-form-label">Address</label>
              <input
                type="text"
                name="address"
                className="app__payment-form-input"
              />
              <label className="app__payment-form-label">
                Zip or postal code
              </label>
              <input
                type="number"
                name="code"
                className="app__payment-form-input"
                style={{ width: "100px" }}
              />

              <label className="app__payment-form-label">Card number</label>
              <input
                type="number"
                name="card"
                className="app__payment-form-input"
              />
              <label className="app__payment-form-label">Expiration date</label>
              <span>
                <input
                  type="text"
                  name="date1"
                  placeholder="month"
                  className="app__payment-form-input"
                  style={{ width: "130px" }}
                />
                <input
                  type="number"
                  name="date2"
                  placeholder="year"
                  className="app__payment-form-input"
                  style={{ width: "100px", marginLeft: "10px" }}
                />
              </span>
              <label className="app__payment-form-label">Security code</label>
              <input
                type="number"
                name="security"
                className="app__payment-form-input"
                style={{ width: "130px" }}
              />
            </form>
            <div className="app__payment-button">
              <button>Pay</button>
            </div>
          </div>
          <div className="app__payment-order">
            <div className="app__payment-order-heading">
              <h3> Order Summary</h3>
            </div>
            <div className="app__payment-order-content">
              <p>Subtotal: ден.</p>
              <p>Shipping: 150 ден.</p>
            </div>
            {/* <p style={{ textAlign: "center" }}>Total Price: 150 ден.</p> */}
            <a href="#">
              <button className="app__payment-order-btn">
                Total Price: 150 ден.
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
