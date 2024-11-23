
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './score.css'; 

const Score = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { score } = location.state || { score: 0 }; 


  const handleEndQuiz = () => {
    navigate('/game', { state: { score } });
  };
  const handlePlayAgain = () => {
    navigate('/quizing'); 
  };

  return (
    <div className="scoring">
      <h2>Quiz Finished!</h2>
      <h3>Your Final Score: {score}</h3>
      <button className="again" onClick={handlePlayAgain}>Play Again</button> 
      <button className="end" onClick={handleEndQuiz}>Quit Quiz</button>
    </div>
  );
};

export default Score;

