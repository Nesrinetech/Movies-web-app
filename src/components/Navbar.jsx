import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
         <img src={logo} alt='logo'/>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Movies</Link>
        </li>
        <li>
          <Link to="/about">TV Shows</Link>
        </li>
        <li>
          <Link to="/contact">Suggest me </Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
