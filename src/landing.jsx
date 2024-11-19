
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './landing.css';


const Landing=()=>{


    return(
 <div className="home">
      <nav className="navbar">
        <div className="logo">
          <img src="/blitzlogo-removebg-preview.png" alt="Logo" className="logo-img" />
        </div>
        <div className="navheading">
          <a href="/home" className="home">Home</a>
          <a href="/about" className="about">About</a>
          <a href="/contact" className="contact">Contact</a>
        </div>
        <div className="nav-links">
        <Link to="/login">
            <button className="login">Log in</button>
            </Link>
            <Link to="/signin">
          <button className="signup">Sign up</button>
          </Link>
        </div>
      </nav>

      <div className="container">
        <div className="content">
          <h1>BRAIN BLITZ.</h1>
          <h2>Give your brain a challenge and watch it grow.</h2>
          <h5>Your mind is not just for storing knowledge, but for organizing it,<br/>
            questioning it, and expanding it- ONE GAME AT A TIME.</h5>
        </div>
      </div>
    </div>
    )
}
export default Landing;