import React, { useState } from 'react';
import './RegisterPage.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDob] = useState('');
  const [tripType, setTripType] = useState('');
  const [tourPreference, setTourPreference] = useState('');
  const [registerError, setRegisterError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/register', {
        firstName,
        lastName,
        email,
        password,
        countryCode,
        phoneNumber,
        dob,
        tripType,
        tourPreference
      })
      .then((result) => {
        if (result.status === 201) {
          navigate('/'); // Redirect to login after successful registration
        } else {
          setRegisterError(result.data.message || 'Registration failed');
        }
      })
      .catch((err) => {
        setRegisterError(err.response?.data.message || 'Server error');
      });
  };

  return (
    <div className="register-page">
      

      <div className="main">
        
        <div className="register-container">
          <div className="register-box">
            <form className="register-form" onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
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
              <div className="form-group">
                <label htmlFor="countryCode">Country Code</label>
                <input
                  type="number"
                  id="countryCode"
                  placeholder="Enter your country code"
                  onChange={(e) => setCountryCode(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="number"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="tripType">Trip Type</label>
                <input
                  type="text"
                  id="tripType"
                  placeholder="Enter your trip type"
                  onChange={(e) => setTripType(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="tourPreference">Tour Preference</label>
                <input
                  type="text"
                  id="tourPreference"
                  placeholder="Enter your tour preference"
                  onChange={(e) => setTourPreference(e.target.value)}
                  required
                />
              </div>
              {registerError && <p className="error">{registerError}</p>}
              <button type="submit" className="register-button">Register</button>
            </form>
            <div className="login-option">
              <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
