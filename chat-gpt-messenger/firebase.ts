// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps  } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdKfyleSjvizgbrEQjBNQqepzvcIpIWOI",
  authDomain: "chatgptmessenger-b8daf.firebaseapp.com",
  projectId: "chatgptmessenger-b8daf",
  storageBucket: "chatgptmessenger-b8daf.appspot.com",
  messagingSenderId: "375041235349",
  appId: "1:375041235349:web:611f7a706474a6f0433e9c"
};

// Initialize Firebase
const app =getApps().length ? getApp():initializeApp(firebaseConfig);

const db=getFirestore(app);


export {db}