
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";


import './signin.css';
import { Link } from 'react-router-dom';  


function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState(''); 

  
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
       if (user) {
         await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          fullName: fullName,
        });
       }
      console.log("User Registered Successfully!");

      toast.success("User Registered Successfully!!", {
        position: "top-center",
        autoClose: 1000,
        
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  

  return (
    <div className="signin-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleRegister} className="signin-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
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
        <button type="submit" className="signin-btn">Sign Up</button>
      </form>
      <div className="login-link">
        <p>Already have an account?  <Link to="/login"> <button className="login-btun">Login</button></Link> </p>
      </div>
    </div>
  );
}

export default SignIn;
