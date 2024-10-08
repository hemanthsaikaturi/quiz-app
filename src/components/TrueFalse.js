import React from 'react';

const TrueFalse = ({ question, onAnswer }) => {
  return (
    <div className="question">
      <h3>{question}</h3>
      <button onClick={() => onAnswer(true)}>True</button>
      <button onClick={() => onAnswer(false)}>False</button>
    </div>
  );
};

export default TrueFalse;
