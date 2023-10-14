// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrfa7A73fno9Rlqx7mXNxqZPhyvZ_5q94",
  authDomain: "imagetest-a4910.firebaseapp.com",
  projectId: "imagetest-a4910",
  storageBucket: "imagetest-a4910.appspot.com",
  messagingSenderId: "1074557323907",
  appId: "1:1074557323907:web:4eff77618f1fd289fa69b6",
  measurementId: "G-TJ22XGFKBK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, app, storage, database };
