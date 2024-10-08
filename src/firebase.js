// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB3XbX-o2sAKcOAwiGhJ_kWa-Osbkn5WBc",
  authDomain: "quizapp-12000.firebaseapp.com",
  databaseURL: "https://quizapp-12000-default-rtdb.firebaseio.com",
  projectId: "quizapp-12000",
  storageBucket: "quizapp-12000.appspot.com",
  messagingSenderId: "172502163506",
  appId: "1:172502163506:web:e20de5d7efbefe7d395c2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
