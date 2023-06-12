import React from "react";
import "./AdminHome.css";
import { AdminNavbar } from "../../components";
import Dashboard from "../Dashboard/Dashboard";
const AdminHome = () => {
  return (
    <div>
      <AdminNavbar />
      <Dashboard />
    </div>
  );
};

export default AdminHome;
