import React from 'react';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import './LoginPage.css';


const LoginPage = () => {
  const login = useGoogleLogin({
    onSuccess: (response) => console.log("Login Success:", response),
    onError: (error) => console.log("Login Failed:", error)
  });

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo-container">
          <img src="/path-to-your-logo.png" alt="Trail Time Logo" className="logo" />
        </div>
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Username" />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Password" />

            <a href="#forgot-password" className="forgot-password">Forgot Password?</a>
            <button type="submit" className="login-btn">Login</button>
          </form>

          <div className="divider">or</div>
          
          <button className="google-login-btn" onClick={login}>
            Continue with Google
          </button>

          <div className="register-info">
            <p>New? <a href="/register" className="register-link">Register now!</a></p>
            <p>Or <a href="/continue-as-guest" className="guest-link">Continue as guest</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
