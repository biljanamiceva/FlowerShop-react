import React from "react";
import "./AdminDashboard.css";
import { MdDashboard } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { TbTruckDelivery, TbReport } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
const AdminDashboard = () => {
  const location = useLocation();
  return (
    <div className="app__admin-dash">
      <div className="app__dash-container">
        <nav className="app__dash-nav">
          <div className="app__dash-nav-upper-options">
            <Link
              to="/admin"
              className={`app__dash-nav-option  ${
                location.pathname === "/admin" ? "option1" : ""
              }`}
            >
              <MdDashboard fontSize={27} />
              <h3> Dashboard</h3>
            </Link>

            <Link
              to="/admin/shops"
              className={`app__dash-nav-option  ${
                location.pathname === "/admin/shops" ? "option1" : ""
              }`}
            >
              <BsShop fontSize={27} />
              <h3> Shops</h3>
            </Link>

            <div className="app__dash-nav-option option4">
              <TbTruckDelivery fontSize={27} />
              <h3> Deliveries</h3>
            </div>

            <div className="app__dash-nav-option option3">
              <TbReport fontSize={27} />
              <h3> Report</h3>
            </div>

            <div className="app__dash-nav-option option5">
              <CgProfile fontSize={27} />
              <h3> Profile</h3>
            </div>

            <div className="app__dash-nav-option option6">
              <IoMdSettings fontSize={27} />
              <h3> Settings</h3>
            </div>

            <div className="app__dash-nav-option logout">
              <BiLogOut fontSize={27} />
              <h3>Logout</h3>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default AdminDashboard;
