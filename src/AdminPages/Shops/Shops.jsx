import React from "react";
import "./Shops.css";
import { AdminDashboard, AdminNavbar } from "../../components";
import { BiSearch } from "react-icons/bi";
import { data } from "../../constants";
const Shops = () => {
  return (
    <>
      <AdminNavbar />
      <div className="main-container">
        <AdminDashboard />
        <div className="main">
          <div className="searchbar2">
            <input type="text" name="" id="" placeholder="Search" />
            <div className="searchbtn">
              <BiSearch color="#fafaff" fontSize={27} />
            </div>
          </div>

          <div className="report-container">
            <div className="report-header">
              <h1 className="app__dash-shops">Shops</h1>
            </div>

            <div className="report-body">
              <div className="report-topic-heading">
                <h3 className="t-op">Florist</h3>
                <h3 className="t-op">Location</h3>
                <h3 className="t-op">Action</h3>
              </div>
              {data.shops.map((shops) => (
                <div key={shops.shopId} className="items">
                  <div className="item1">
                    <h3 className="t-op-nextlvl">{shops.florist}</h3>
                    <h3 className="t-op-nextlvl">{shops.shopLocation}</h3>
                    <h3 className="t-op-nextlvl app__shops-button">
                      <button>Details</button>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shops;
