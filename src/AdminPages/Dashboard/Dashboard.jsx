import React from "react";
import "./Dashboard.css";
import { BiSearch } from "react-icons/bi";
import { AdminDashboard } from "../../components";
import { GiShop, GiFlowers, GiShoppingCart } from "react-icons/gi";
import { BsEmojiSmile } from "react-icons/bs";
import { data } from "../../constants";
const Dashboard = () => {
  return (
    <div className="main-container">
      <AdminDashboard />
      <div className="main">
        <div className="searchbar2">
          <input type="text" name="" id="" placeholder="Search" />
          <div className="searchbtn">
            <BiSearch color="#fafaff" fontSize={27} />
          </div>
        </div>
        <div className="box-container">
          <div className="box box1">
            <div className="text">
              <h2 className="topic-heading">30</h2>
              <h2 className="topic">Registered Florists</h2>
            </div>
            <GiShop fontSize={35} color="white" />
          </div>

          <div className="box box2">
            <div className="text">
              <h2 className="topic-heading">200 +</h2>
              <h2 className="topic">Products</h2>
            </div>

            <GiFlowers fontSize={35} color="white" />
          </div>

          <div className="box box3">
            <div className="text">
              <h2 className="topic-heading">1000 +</h2>
              <h2 className="topic">Orders</h2>
            </div>

            <GiShoppingCart fontSize={35} color="white" />
          </div>

          <div className="box box4">
            <div className="text">
              <h2 className="topic-heading">500 +</h2>
              <h2 className="topic">Satisfied Customers</h2>
            </div>
            <BsEmojiSmile fontSize={35} color="white" />
          </div>
        </div>

        <div className="report-container">
          <div className="report-header">
            <h1 className="app__dash-orders">Orders</h1>
          </div>

          <div className="report-body">
            <div className="report-topic-heading">
              <h3 className="t-op">Full Name</h3>
              <h3 className="t-op">Florist</h3>
              <h3 className="t-op">Price</h3>
              <h3 className="t-op">Status</h3>
            </div>
            {data.orders.map((orders) => (
              <div key={orders.orderId} className="items">
                <div className="item1">
                  <h3 className="t-op-nextlvl">{orders.fullName}</h3>
                  <h3 className="t-op-nextlvl">{orders.florist}</h3>
                  <h3 className="t-op-nextlvl">{orders.price}</h3>
                  <h3 className="t-op-nextlvl label-tag">
                    {orders.statusOrder}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
