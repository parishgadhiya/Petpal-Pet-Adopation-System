// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);


export let auth = getAuth(app)
export let db = getFirestore(app)
export let storage = getStorage(app)
