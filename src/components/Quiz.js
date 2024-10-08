// src/components/Quiz.js
import React from 'react';
import Question from './Question';
import ProgressBar from './ProgressBar';
import NavigationButtons from './NavigationButtons';

const Quiz = ({ questions, currentQuestion, setCurrentQuestion }) => {
  const totalQuestions = questions.length;

  return (
    <div>
      <ProgressBar currentQuestion={currentQuestion} totalQuestions={totalQuestions} />
      <Question question={questions[currentQuestion - 1]} currentQuestion={currentQuestion} />
      <NavigationButtons 
        currentQuestion={currentQuestion} 
        setCurrentQuestion={setCurrentQuestion} 
        totalQuestions={totalQuestions}
      />
    </div>
  );
};

export default Quiz;
