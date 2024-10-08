import React from 'react';

const MultipleChoice = ({ question, options, onAnswer }) => {
  return (
    <div className="question">
      <h3>{question}</h3>
      <ul>
        {options.map((option, index) => (
          <li key={index} onClick={() => onAnswer(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultipleChoice;
