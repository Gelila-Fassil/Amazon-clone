// //this initializes firebase service to our aplication

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// //this is used for authentication service
// import {getAuth} from 'firebase/auth'
// import 'firebase/compat/firestore'
// import 'firebase/compat/auth'
// const firebaseConfig = {
//   apiKey: "AIzaSyAbh3yJiewNjIZTzhzdM0J0MHjAMZ2JklM",
//   authDomain: "clone-7fbb3.firebaseapp.com",
//   projectId: "clone-7fbb3",
//   storageBucket: "clone-7fbb3.appspot.com",
//   messagingSenderId: "870425335009",
//   appId: "1:870425335009:web:8c10d1f31fb7df1339d3a0",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const Auth = getAuth(app)//we are exporting all services related to authentication and giving it to Auth variable
// export const db=app.firestore()





























// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbh3yJiewNjIZTzhzdM0J0MHjAMZ2JklM",
  authDomain: "clone-7fbb3.firebaseapp.com",
  projectId: "clone-7fbb3",
  storageBucket: "clone-7fbb3.appspot.com",
  messagingSenderId: "870425335009",
  appId: "1:870425335009:web:8c10d1f31fb7df1339d3a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
