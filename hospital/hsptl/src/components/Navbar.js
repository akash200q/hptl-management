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
          <Link to="/doctors">Doctors</Link>
        </li>
        <li>
          <Link to="/appointments">Book Appointment</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
