/* import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';


   const firebaseConfig = {
     apiKey: "AIzaSyCv5SFyFrdR4uuMnVx8LijcySDMceRoLMs",
     authDomain: "fir-reactnative-84379.firebaseapp.com",
     projectId: "fir-reactnative-84379",
     storageBucket: "fir-reactnative-84379.appspot.com",
     messagingSenderId: "94383074946",
     appId: "1:94383074946:web:eadd59a3f1f803d606ce9b"
   };



const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

export { db }; */

// Import the functions you need from the SDKs you need
import { initializeFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv5SFyFrdR4uuMnVx8LijcySDMceRoLMs",
  authDomain: "fir-reactnative-84379.firebaseapp.com",
  projectId: "fir-reactnative-84379",
  storageBucket: "fir-reactnative-84379.appspot.com",
  messagingSenderId: "94383074946",
  appId: "1:94383074946:web:eadd59a3f1f803d606ce9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

export { db };