import React, { useState } from 'react';
import './LandingPage.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import logo from '../assets/trailtime-logo.png';
import userrr from '../assets/userrr.jpg';
import backgroundVideo from '../assets/travelvideo.mp4';
import Lettering from '../assets/lettering.png';
import backgroundimage from '../assets/bg.jpg';
import MyLogo from './Logo';

const LandingPage = () => {
  const handleRegisterClick = () => {
    navigate('/service-provider-register'); // Navigate to the registration page
};
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/login', { email, password })
      .then((result) => {
        if (result.status === 200) {
          navigate('/browse-listings'); // Redirect on successful login
        } else {
          setLoginError(result.data.message || 'An error occurred');
        }
      })
      .catch((error) => {
        if (error.response) {
          setLoginError(error.response.data.message); // Use specific error message from backend
        } else {
          setLoginError('Server error. Please try again later.');
        }
      });
  };
  
  
  return (
    <div className="landing-page">
      

      <div className="main">
        <nav className="navbar">
            <div>
            <img src={Lettering} alt="Description" style={{ width: '300px', height: '100px' }} />
            </div>
          
            <Link to="/browse-listings" className="navbar-btn">Browse Listings</Link>
            <Link to="/wishlists" className="navbar-btn">Wish Lists</Link>
            <Link to="/check-availability" className="navbar-btn">Check Availability</Link>
          
        </nav>

        <div className="main-content">
          <img src={logo} alt="Trail Time Logo" className="main-logo" />
          <div className="login-container">
            <div className="login-box">
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <img src={userrr} alt="icon" style={{ width: '100px', height: '100px' }} />
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter your E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {loginError && <p className="error">{loginError}</p>}
                <button type="submit" className="login-button">Login</button>
              </form>
              <div className="register-option">
                <p>New? <a href="/register">Continue as guest / Register now!</a></p>
              </div>
            </div>
          </div>
          <div className="footer">
                <div className="footer-content">
                    <p>Are you a service provider? Register with us now!</p>
                    <button onClick={handleRegisterClick}>Register</button>
                </div>
            </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default LandingPage;
