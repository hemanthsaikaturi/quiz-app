// src/pages/QuizPage.js
import React, { useState } from 'react';
import Question from '../components/Question';  // Import the Question component

const QuizPage = ({ questions }) => {  // Accept questions as prop
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);  // Track current question
  const [answers, setAnswers] = useState({});  // Store user's answers

  const handleAnswer = (questionIndex, answer) => {
    // Store user's answer
    setAnswers({ ...answers, [questionIndex]: answer });
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);  // Move to the next question
  };

  const prevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));  // Go back to previous question
  };

  const submitQuiz = () => {
    // Handle quiz submission, you can send the answers to Firebase
    console.log("User's Answers:", answers);
  };

  const currentQuestion = questions[currentQuestionIndex];  // Get current question

  return (
    <div className="quiz-container">
      {questions && currentQuestion ? (
        <>
          <Question
            question={currentQuestion}
            currentQuestion={currentQuestionIndex + 1}
            handleAnswer={handleAnswer}
          />
          <div className="navigation-buttons">
            <button onClick={prevQuestion} disabled={currentQuestionIndex === 0}>
              Previous
            </button>
            {currentQuestionIndex < Object.keys(questions).length - 1 ? (
              <button onClick={nextQuestion}>Next</button>
            ) : (
              <button onClick={submitQuiz}>Submit</button>
            )}
          </div>
        </>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default QuizPage;
