
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const Landing = () => {
  return (
    <div className="landingpage" id="landing">
      <nav className="navbar">
        <div className="logo">
          <img src="https://ucarecdn.com/218e90b8-3175-4901-af3a-1e4ae51cfaf4/-/preview/358x141/" alt="Logo" className="logo-img" />
        </div>
        <div className="navheading">
          <a href="#landing" className="landing">Home</a>
          <a href="#about" className="about">About</a>
          <a href="#contact" className="contact">Contact</a>
        </div>
        <div className="nav-links">
          <Link to="/login">
            <button className="loginland">Log in</button>
          </Link>
          <Link to="/signin">
            <button className="signupland">Sign up</button>
          </Link>
        </div>
      </nav>
      <div className="container">
        <div className="content">
          <h1>"BRAIN BLITZ"</h1>
          <h2>Give your brain a challenge and watch it grow.</h2>
          <h5>Your mind is not just for storing knowledge, but for organizing it,<br />
            questioning it, and expanding it- ONE GAME AT A TIME.</h5>
        </div>
      </div>
      <section className="about-section" id="about">
        <div className="about-text">
          <h2>What is Brain Blitz?</h2>
          <p>Brain Blitz is designed to push the boundaries of your mind. Engage with challenging games that help you grow your cognitive skills, enhance memory, and boost your problem-solving ability. Whether you're looking to sharpen your mind or just have fun.</p>
        </div>
        <div className="about-image">
          <img src="https://ucarecdn.com/6cbb1d50-be09-43c2-9db8-bd9a983b7e40/-/preview/630x360/" alt="Brain" className="brain-img" />
        </div>
      </section>

<section className="contact-section" id="contact">
<h2>Let's connect?</h2>

<div className="contact-info">
  <p>If you need assistance or want to reach out to us, here are the ways you can contact us:</p>

  <div className="contact-details">
    <h3>Support</h3>
    <p>Email: <a href="mailto:simransingh25060@gmail.com">simransingh25060@gmail.com</a></p>
    <p>Phone No: 1-800-123-4567 </p>
  </div>

  <div className="social-media">
    <h3>Follow Us</h3>
    <ul>
      <li><a href="https://www.linkedin.com/in/simran-singh-50165b31a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">Linkdin</a></li>
      <li><a href="">Twitter</a></li>
      <li><a href="https://www.instagram.com/simransingh_250?igsh=cHIzODJraDg3bTJp&utm_source=qr">Instagram</a></li>
    </ul>
  </div>

</div>
</section>
<footer>
<p>© 2024 Your Website</p>
</footer>
</div>
  );
}
export default Landing;
