import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  
import './guess.css';

const wordsWithHints = [
  { word: 'html', hint: 'A tag which defines the root of an HTML document and is the container for all the content on the page.' },
  { word: 'head', hint: 'A tag which contains meta-information about the document, such as its title, links to stylesheets, and scripts.' },
  { word: 'body', hint: 'Represents the main content of an HTML document, including text, images, and other media.' },
  { word: 'span', hint: 'A generic inline container used to apply styles or manipulate a part of text or content without affecting the layout.' },
  { word: 'p', hint: 'A tag which defines a paragraph of text.' },
  { word: 'a', hint: 'A tag which creates a hyperlink to another web page or resource.' },
  { word: 'img', hint: 'A tag which embeds an image in the HTML document using the src attribute to define the image source.' },
  { word: 'ul', hint: 'A tag which defines an unordered list, typically used with <li> list items.' },
  { word: 'ol', hint: 'A tag which defines an ordered list, used with <li> elements to display items in sequence.' },
  { word: 'div', hint: 'A generic container element used to group and style sections of the webpage content using CSS.' },
];

const GuessGame = () => {
  const [words, setWords] = useState(wordsWithHints);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(wordsWithHints[currentIndex]);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [completedWords, setCompletedWords] = useState(new Set()); 
  const [gameEnded, setGameEnded] = useState(false);

  useEffect(() => {
    if (currentIndex === words.length - 1) {
      setGameEnded(true); 
    }
  }, [currentIndex, words.length]);

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (guess.toLowerCase() === currentWord.word.toLowerCase()) {
      setMessage(`Correct! The answer is: ${currentWord.word}`);
      setIsCorrect(true);
      setCompletedWords((prev) => new Set(prev.add(currentWord.word))); 
    } else {
      setMessage('Incorrect! Try again.');
      setIsCorrect(false);
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
    setMessage(`The correct word is: ${currentWord.word}`);
  };

  const handleNextQuestion = () => {
  
    if (currentIndex + 1 < words.length) {
      setCurrentIndex(currentIndex + 1);
      setCurrentWord(words[currentIndex + 1]);
      setGuess('');
      setMessage('');
      setIsCorrect(false);
      setShowAnswer(false);
    }
  };

  return (
    <div className="guessinggame">
         <img id="title" src="./toplogo.png" alt="Logo" />
    <div className="game-container">
      <h1>Word Guess Game</h1>
      <p className="hint">Hint: {currentWord.hint}</p>
      <form onSubmit={handleSubmit} className="guess-form">
        <input
          type="text"
          value={guess}
          onChange={handleChange}
          placeholder="Type your guess here"
          className="guess-input"
          disabled={isCorrect || gameEnded}
        />
        <button type="submit" className="submit-button" disabled={isCorrect || gameEnded}>
          Guess
        </button>
      </form>
      <p className="message">{message}</p>

      <button className="showanswer-button" onClick={handleShowAnswer} disabled={gameEnded}>
        Show Correct Word
      </button>

      <button
        className="nextquestion-button"
        onClick={handleNextQuestion}
        disabled={!isCorrect && !showAnswer || gameEnded}
      >
        Next Question
      </button>

     
      {gameEnded && (
        <div className="gameovermessage">
          <p>Game Ended! All words have been guessed correctly.</p>
        </div>
      )}

      <div className="quizlink">
        <p>
          <Link to="/game" className="quizlink-text">Quit Game</Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default GuessGame;
