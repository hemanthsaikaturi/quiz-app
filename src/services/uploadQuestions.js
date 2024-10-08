import { useEffect, useState } from 'react';
import { db } from './firebaseConfig'; // Your Firebase config file
import { doc, getDoc } from 'firebase/firestore';

const QuizComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // For error handling

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const docRef = doc(db, 'quizzes', 'QuizData'); // Adjust this path as necessary
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          // Ensure 'questions' is correctly accessed as an array
          if (data.questions) {
            setQuestions(data.questions);
          } else {
            console.error("No questions field found");
            setError("No questions available.");
          }
        } else {
          console.error("No such document!");
          setError("Quiz data not found.");
        }
      } catch (error) {
        console.error("Error fetching questions: ", error);
        setError("Error fetching questions.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Your loading screen
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.text}</h3>
          <ul>
            {question.options.map((option, i) => (
              <li key={i}>{option}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuizComponent;
