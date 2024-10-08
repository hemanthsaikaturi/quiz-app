// src/components/NavigationButtons.js
import React from 'react';

const NavigationButtons = ({ currentQuestion, setCurrentQuestion, totalQuestions }) => {
  return (
    <div>
      <button
        onClick={() => setCurrentQuestion(currentQuestion - 1)}
        disabled={currentQuestion === 1}
      >
        Previous
      </button>
      <button
        onClick={() => setCurrentQuestion(currentQuestion + 1)}
        disabled={currentQuestion === totalQuestions}
      >
        Save & Next
      </button>
    </div>
  );
};

export default NavigationButtons;
