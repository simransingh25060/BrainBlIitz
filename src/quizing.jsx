import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './quizing.css';
import Categories from './categories';

const Quizing = () => {
  const [username, setUsername] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [category, setCategory] = useState('9'); 
  const navigate = useNavigate();  

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleDifficultyChange = (e) => setDifficulty(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const startQuiz = () => {
    if (username.trim() === '') {
      alert('Please enter your username');
      return;
    }

    navigate(`/quiz?username=${username}&difficulty=${difficulty}&category=${category}`);
  };

  return (
    <div className="quizing-container">
      <div className="form-container">
        <h2>QUIZ TIME!</h2>

        <div className="form-item">
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={handleUsernameChange} 
            placeholder="Enter your username" 
          />
        </div>

        <div className="form-item">
          <label htmlFor="difficulty">Select Difficulty:</label>
          <select id="difficulty" value={difficulty} onChange={handleDifficultyChange}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="form-item">
          <label htmlFor="category">Select Category:</label>
          <select id="category" value={category} onChange={handleCategoryChange}>
            {Categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.category}
              </option>
            ))}
          </select>
        </div>

        <button className="startquiz" onClick={startQuiz}>Start Quiz</button>
        
      </div>
      <div className="image-container">
      <img 
        src="https://ucarecdn.com/8b310b4e-cdca-4cc2-9d4e-30987a1803b4/-/preview/800x623/" 
        alt="Quiz Image" 
         className="quiz-image"
       />
      </div>
    </div>
  );
};

export default Quizing;
