import React from 'react';

const ImageChoice = ({ question, images, onAnswer }) => {
  return (
    <div className="question">
      <h3>{question}</h3>
      <ul>
        {images.map((image, index) => (
          <li key={index} onClick={() => onAnswer(image)}>
            <img src={image} alt={`Option ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageChoice;
