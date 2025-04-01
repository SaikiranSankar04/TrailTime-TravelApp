import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Lettering from '../assets/lettering.png';
const Navbar = () => {
  return (
    <nav className="navbar">
            <div>
            <img src={Lettering} alt="Description" style={{ width: '300px', height: '100px' }} />

            
                </div>
          <div className="navbar-left">
            <Link to="/browse-listings" className="navbar-btn">Browse Listings</Link>
            <Link to="/wishlists" className="navbar-btn">Wish Lists</Link>
            <Link to="/check-availability" className="navbar-btn">Check Availability</Link>
          </div>
    </nav>
  );
};

export default Navbar;