// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN5YayInh7IYKQsR_kf2nxBc675F1dNe8",
  authDomain: "unique-recipe.firebaseapp.com",
  projectId: "unique-recipe",
  storageBucket: "unique-recipe.appspot.com",
  messagingSenderId: "747347131072",
  appId: "1:747347131072:web:bae72599639e3affb0cb25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;