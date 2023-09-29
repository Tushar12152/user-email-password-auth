// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrD-TMqkz7qmJxIww62XK7oBmtA4zTVkY",
  authDomain: "user-email-password-auth-7664f.firebaseapp.com",
  projectId: "user-email-password-auth-7664f",
  storageBucket: "user-email-password-auth-7664f.appspot.com",
  messagingSenderId: "659720795806",
  appId: "1:659720795806:web:f24a1174ba3a61bc3ced8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth