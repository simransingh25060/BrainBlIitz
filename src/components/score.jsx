
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Score = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { score } = location.state || { score: 0 }; 


  const handleEndQuiz = () => {
    navigate('/game', { state: { score } });
  };
  const handlePlayAgain = () => {
    navigate('/quizing');  // Redirect to quizing.jsx, the quiz page
  };

  return (
    <div>
      <h2>Quiz Completed!</h2>
      <h3>Your Final Score: {score}</h3>
      <button onClick={handleEndQuiz}>Quit Quiz</button>
      <button onClick={handlePlayAgain}>Play Again</button> 
    </div>
  );
};

export default Score;

