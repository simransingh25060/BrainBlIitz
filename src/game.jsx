import React from 'react';
import { Link } from 'react-router-dom';
import './game.css'; 

const Game = () => {
  return (
    <div className="gaming">
    <div className="home">
      <div className="section quiz-section">
        <Link to="/quizing" className="link">
          <img src="https://ucarecdn.com/d145d720-353c-48dd-b509-02b2ee266378/-/preview/1000x1000/" alt="Quiz" className="section-image" id="quiz"/>
          <div className="section-title">Quiz</div>
        </Link>
      </div>
      <div className="section puzzle-section">
        <Link to="/puzzle" className="link">
          <img src="https://ucarecdn.com/a8abc75e-91b1-4699-81fb-eb736bec338e/-/preview/1000x1000/" alt="Puzzle" className="section-image" id="puzzle"/>
          <div className="section-title">Puzzle</div>
        </Link>
      </div>
      <div className="section word-guess-section">
          <Link to="/guess" className="link">
            <img src="https://ucarecdn.com/3b46dee6-61ad-4aac-832c-c86f2369c643/-/preview/1000x1000/" alt="Word Guess" className="section-image" id="word-guess"/>
            <div className="section-title">Guess</div>
          </Link>
          </div>
    </div>
    </div>
  );
};

export default Game;
