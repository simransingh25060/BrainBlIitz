import React from 'react';
import { Link } from 'react-router-dom';
import './game.css'; 

const Game = () => {
  return (
    <div className="gaming">
    <div className="home">
      <div className="section quiz-section">
        <Link to="/quizing" className="link">
          <img src="src/blitzquiz_enhanced.jpg" alt="Quiz" className="section-image" id="quiz"/>
          <div className="section-title">Quiz</div>
        </Link>
      </div>
      <div className="section puzzle-section">
        <Link to="/puzzle" className="link">
          <img src="src/blitzpuzzle.jpg" alt="Puzzle" className="section-image" id="puzzle"/>
          <div className="section-title">Puzzle</div>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Game;
