import React, { useEffect, useState } from 'react';
import fetchQuestions from './services/fetchQuestions'; // Default import

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState({});

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const fetchedQuestions = await fetchQuestions();
        setQuestions(fetchedQuestions);
      } catch (err) {
        console.error(err);
        setError("Error fetching questions.");
      } finally {
        setLoading(false);
      }
    };

    loadQuestions();
  }, []);

  const handleAnswerChange = (answer) => {
    setUserResponses({
      ...userResponses,
      [currentQuestionIndex]: answer,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSave = () => {
    // Implement saving logic here, e.g., save responses to the database
    console.log("Responses saved:", userResponses);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h3>{currentQuestion.text}</h3>
      <ul>
        {currentQuestion.options.map((option, i) => (
          <li key={i}>
            <label>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={userResponses[currentQuestionIndex] === option}
                onChange={() => handleAnswerChange(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>

      <div>
        <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>
          Next
        </button>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default App;
