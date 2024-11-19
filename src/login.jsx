import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection after login
import './login.css'; // Import CSS for styling
import { Link } from 'react-router-dom';  

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Hook for navigation

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Details:', { email, password });

    // Here, you would typically send a request to your backend for authentication
    // If successful, you can redirect the user to the homepage or dashboard
    // For now, we'll just simulate a successful login and redirect to the home page:
    
    navigate('/home'); // Replace '/home' with the actual route for your app after login
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Input */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="login-btn">Login</button>
      </form>

      {/* Link to Sign Up page */}
      <div className="signup-link">
      <p>Create an account?  <Link to="/signin"> <button className="login-btun">Sign up</button> </Link> </p>
      </div>
    </div>
  );
}

export default Login;
