// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


export const getFirebaseApp = () => {

// Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyDlH4jMTOBCebcGKxc456YSxzSWMn3iJpg",
  authDomain: "http-d0e90.firebaseapp.com",
  databaseURL: "https://http-d0e90-default-rtdb.firebaseio.com",
  projectId: "http-d0e90",
  storageBucket: "http-d0e90.appspot.com",
  messagingSenderId: "393739558403",
  appId: "1:393739558403:web:c8991aba640ece201eb836"
};

// Initialize Firebase
return  initializeApp(firebaseConfig);
}