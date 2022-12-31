import { initializeApp } from "firebase/app";
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBsubiuW9cMNx9Ih0oEw35uwtGTLUWdyZM",
  authDomain: "fir-first-step-8e2f8.firebaseapp.com",
  databaseURL: "https://fir-first-step-8e2f8-default-rtdb.firebaseio.com",
  projectId: "fir-first-step-8e2f8",
  storageBucket: "fir-first-step-8e2f8.appspot.com",
  messagingSenderId: "282347930500",
  appId: "1:282347930500:web:354ffa31ebf5e2de9153d1"
};

const app = initializeApp(firebaseConfig);