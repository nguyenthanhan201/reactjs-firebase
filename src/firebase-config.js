//file connect to firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbTRleG-5KvJnYxYqeqPjHyCN35S5IiYs",
  authDomain: "fir-tutorial-11752.firebaseapp.com",
  projectId: "fir-tutorial-11752",
  storageBucket: "fir-tutorial-11752.appspot.com",
  messagingSenderId: "939040328542",
  appId: "1:939040328542:web:8ad0f42bb1c1acf30b9dcf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
