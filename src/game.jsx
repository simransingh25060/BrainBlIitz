import React from 'react';
import { Link } from 'react-router-dom';
import './game.css'; 

const Game = () => {
  return (
    <div className="gaming">
    <div className="home">
      <div className="section quiz-section">
        <Link to="/quizing" className="link">
          <img src="https://ucarecdn.com/3a949bbc-8bae-45dd-bc81-094e30c1cdb9/-/preview/1000x571/" alt="Quiz" className="section-image" id="quiz"/>
          <div className="section-title">Quiz</div>
        </Link>
      </div>
      <div className="section puzzle-section">
        <Link to="/puzzle" className="link">
          <img src="https://ucarecdn.com/a2180a8b-9db9-433b-af5b-d8fe2f216819/-/preview/1000x1000/" alt="Puzzle" className="section-image" id="puzzle"/>
          <div className="section-title">Puzzle</div>
        </Link>
      </div>
      <div className="section wordguess-section">
          <Link to="/guess" className="link">
            <img src="https://ucarecdn.com/bd2b761b-4bc3-493b-847c-14976af151c5/-/preview/1000x1000/" alt="Word Guess" className="section-image" id="word-guess"/>
            <div className="section-title">Guess</div>
          </Link>
          </div>
    </div>
    </div>
  );
};

export default Game;
