import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;