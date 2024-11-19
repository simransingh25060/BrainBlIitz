
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './login.css';
import { Link, useNavigate } from 'react-router-dom'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");

    
      toast.success("User logged in Successfully", {
        position: "top-center",
        autoClose: 1500,
      });
      setTimeout(() => {
        navigate('/game');
      }, 2000);  
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
        autoClose: 1000, 
      });

     }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
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

        
        <button type="submit" className="login-btn">Login</button>
        </form>
   
      <div className="signup-link">
        <p>Create an account? <Link to="/signin"><button className="login-btun">Sign up</button></Link></p>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Login;
