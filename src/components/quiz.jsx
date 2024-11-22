

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Quiz.css';  

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const username = queryParams.get('username');
  const difficulty = queryParams.get('difficulty');
  const category = queryParams.get('category');

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
        const data = await response.json();
        if (data.results) {
          setQuestions(data.results);
          setShuffledAnswers(data.results.map((question) => {
            const allAnswers = [...question.incorrect_answers, question.correct_answer];
            shuffleArray(allAnswers);
            return allAnswers;
          }));
        } else {
          console.error('No results from API');
        }
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
      setLoading(false);
    };

    fetchQuestions();
  }, [category, difficulty]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handleAnswerClick = (answer) => {
    if (answered) return;

    setSelectedAnswer(answer);

    if (answer === questions[currentQuestionIndex].correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }

    setAnswered(true);
  };

  const handleNextQuestion = () => {
    setAnswered(false);
    setSelectedAnswer(null);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      navigate('/score', { state: { score } });
    }
  };

  const handleEndQuiz = () => {
    navigate('/score', { state: { score } });
  };

  if (loading) {
    return <div>Loading quiz...</div>;
  }

  if (questions.length === 0) {
    return <div>No questions available</div>;
  }

  const question = questions[currentQuestionIndex];
  const correctAnswer = question.correct_answer;

  const currentShuffledAnswers = shuffledAnswers[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h4>Hey, {username}!</h4>
        <h2>Question {currentQuestionIndex + 1}: {question.question}</h2>
      </div>
      <ul className="answer-list">
        {currentShuffledAnswers.map((answer, index) => {
          let answerClass = 'answer-item';
          if (answered) {
            if (answer === selectedAnswer) {
              answerClass = answer === correctAnswer ? 'answer-item selected' : 'answer-item incorrect';
            } else if (answer === correctAnswer) {
              answerClass = 'answer-item selected';
            }
          }

          return (
            <li
              key={index}
              onClick={() => handleAnswerClick(answer)}
              className={answerClass}
            >
              {index + 1}. {answer}
            </li>
          );
        })}
      </ul>
      {answered && (
        <div>
          <p>{selectedAnswer === correctAnswer ? 'Correct!' : 'Incorrect!'}</p>
        </div>
      )}
      <div className="button-container">
        <button className="next" onClick={handleNextQuestion} disabled={!answered}>
          {currentQuestionIndex + 1 < questions.length ? 'Next Question' : 'Finish Quiz'}
        </button>
        <button className="endquiz" onClick={handleEndQuiz}>
          End Quiz
        </button>
      </div>
      <p className="score">Score: {score}</p>
    </div>
  );
};

export default Quiz;
