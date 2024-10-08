// src/components/Question.js
import React from 'react';

const Question = ({ question, currentQuestion, handleAnswer }) => {
  const renderOptions = () => {
    switch (question.type) {
      case 'multiple-choice':
        return question.options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={option}
              name={`question-${currentQuestion}`}
              onClick={() => handleAnswer(currentQuestion, option)}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ));
      case 'true-false':
        return (
          <div>
            <input
              type="radio"
              id="true"
              name={`question-${currentQuestion}`}
              onClick={() => handleAnswer(currentQuestion, 'true')}
            />
            <label htmlFor="true">True</label>

            <input
              type="radio"
              id="false"
              name={`question-${currentQuestion}`}
              onClick={() => handleAnswer(currentQuestion, 'false')}
            />
            <label htmlFor="false">False</label>
          </div>
        );
      case 'image-based':
        return (
          <div>
            <img src={question.imageUrl} alt="Question" />
            <input
              type="text"
              onChange={(e) => handleAnswer(currentQuestion, e.target.value)}
              placeholder="Type your answer"
            />
          </div>
        );
      case 'text-input':
        return (
          <div>
            <input
              type="text"
              onChange={(e) => handleAnswer(currentQuestion, e.target.value)}
              placeholder="Type your answer"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h3>Question {currentQuestion}</h3>
      <p>{question.question}</p>
      {renderOptions()}
    </div>
  );
};

export default Question;
