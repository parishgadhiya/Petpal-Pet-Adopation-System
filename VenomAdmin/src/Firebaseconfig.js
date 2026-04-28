// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs4uLZP8ZuJMq5Zz-WCd1vXIsg0hXU82w",
  authDomain: "petpal-a6874.firebaseapp.com",
  projectId: "petpal-a6874",
  storageBucket: "petpal-a6874.firebasestorage.app",
  messagingSenderId: "229659096554",
  appId: "1:229659096554:web:a3288bfb50b97c021f2e93"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export let db = getFirestore(app)


