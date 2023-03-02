
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAg2yhTDeX-Kar9Q9UPiZ-xvlEB_BrQA48",
  authDomain: "login-logout-effecti.firebaseapp.com",
  projectId: "login-logout-effecti",
  storageBucket: "login-logout-effecti.appspot.com",
  messagingSenderId: "575909648738",
  appId: "1:575909648738:web:fc9f668f260d26d532343b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };