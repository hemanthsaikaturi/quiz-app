// src/components/ProgressBar.js
import React from 'react';

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div>
      <div className="progress-bar">
        <div className="progress-bar-filled" style={{ width: `${progress}%` }}></div>
      </div>
      <p>Progress: {currentQuestion} of {totalQuestions}</p>
    </div>
  );
};

export default ProgressBar;
