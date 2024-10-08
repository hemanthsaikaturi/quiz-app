import React, { useState } from 'react';

const FillInTheBlank = ({ question, onAnswer }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    onAnswer(input);
  };

  return (
    <div className="question">
      <h3>{question}</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your answer here"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FillInTheBlank;
