// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6O7IA3KnJVXHbIfZPkdsl3HkIsgo47iU",
    authDomain: "better-career.firebaseapp.com",
    projectId: "better-career",
    storageBucket: "better-career.appspot.com",
    messagingSenderId: "1098490452599",
    appId: "1:1098490452599:web:e35be46a9beb9c2843c472"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;