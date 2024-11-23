

import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import SignIn from './signin'; 
import Login from './login';
import Landing from './landing';
import Game from './game';
import Quizing from './quizing';






import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Quiz from './components/quiz';
import Score from './components/score';
import Puzzle from './components/puzzle';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/signin" element={<SignIn />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/game" element={<Game />} />
        <Route path="/quizing" element={<Quizing />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/score" element={<Score />} />
        <Route path="/puzzle" element={<Puzzle />} />
      </Routes>
      <ToastContainer/>
    </Router>
  );
}

export default App;
