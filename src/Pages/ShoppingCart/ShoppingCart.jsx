import React, { useState } from "react";
import "./ShoppingCart.css";
import { data } from "../../constants";
import { Navbar } from "../../components";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(
    data.catalog.map((item) => ({ ...item, quantity: 1 }))
  );

  const increment = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.catalogId === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      })
    );
  };

  const decrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.catalogId === itemId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      })
    );
  };

  const removeItem = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.catalogId !== itemId)
    );
  };

  const calculateItemPrice = (item) => {
    return parseFloat(item.price) * item.quantity;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += parseFloat(item.price) * item.quantity;
    });
    return totalPrice; // Limit decimal places to two
  };

  return (
    <div>
      <Navbar />

      <div className="app__bg app__sc flex__center section__padding">
        <div className="app__sc-heading">
          <h1>Shopping Cart</h1>
        </div>
        <div className="app__sc-content">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.catalogId}>
                  <td>
                    <img
                      className="app__sc-img"
                      src={item.imgUrl}
                      alt={item.name}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price} ден.</td>
                  <td className="quantity-buttons">
                    <button onClick={() => decrement(item.catalogId)}>-</button>
                    {item.quantity}
                    <button onClick={() => increment(item.catalogId)}>+</button>
                  </td>
                  <td>{calculateItemPrice(item)} ден.</td>
                  <td>
                    <button
                      className="action-btn"
                      onClick={() => removeItem(item.catalogId)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="app__sc-order">
            <div className="app__sc-order-heading">
              <h3> Order Summary</h3>
            </div>
            <div className="app__sc-order-content">
              <p>Subtotal: {calculateTotalPrice()} ден.</p>
              <p>Shipping: 150 ден.</p>
            </div>
            <p style={{ textAlign: "center" }}>
              Total Price: {parseFloat(calculateTotalPrice()) + 150} ден.
            </p>
            <a href="/orderDetail">
              <button className="app__sc-order-btn">Checkout</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
