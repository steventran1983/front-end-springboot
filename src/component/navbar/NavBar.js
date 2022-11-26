import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
const NavBar = () => {
  return (
    <div className="nav-container grid">
      <div className="nav-header">
        <h2 className="header-title">Thang Tran</h2>
        <ul className="nav-list">
          <li className="nav-item">
            <button className="nav-button">
              <Link to="/" className="nav-link">Adding Employee</Link>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-button">
              <Link to="/employees" className="nav-link">Get Employees</Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar