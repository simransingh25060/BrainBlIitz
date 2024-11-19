

import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import SignIn from './signin'; 
import Login from './login';
import Landing from './landing';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<Landing />} /> 
        <Route path="/signin" element={<SignIn />} /> 
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
