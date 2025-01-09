import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // For styling (optional)

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Hospital Management System</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/register">Register/Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
