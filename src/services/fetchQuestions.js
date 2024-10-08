// fetchQuestions.js
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config'; // Adjust the path to firebaseConfig

const fetchQuestions = async () => {
  const docRef = doc(db, 'quizzes', 'QuizData');
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().questions; // Return the questions array
  } else {
    throw new Error("No such document!");
  }
};

export default fetchQuestions;
