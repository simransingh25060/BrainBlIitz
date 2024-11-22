

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const location = useLocation();
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
        console.log(data);  
        if (data.results) {
          setQuestions(data.results);
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


  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  if (loading) {
    return <div>Loading quiz...</div>;
  }


  if (questions.length === 0) {
    return <div>No questions available</div>;
  }

  const question = questions[currentQuestionIndex];

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <h2>{question.question}</h2>
      <ul>
        {question.incorrect_answers.concat(question.correct_answer).map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
      <button onClick={handleNextQuestion}>Next Question</button>
    </div>
  );
};

export default Quiz;
