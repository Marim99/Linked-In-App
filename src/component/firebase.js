import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB1vtTGm4DfK39K19d6XUM3ZLpH2SPi12U",
  authDomain: "linkedin-clone-191f6.firebaseapp.com",
  projectId: "linkedin-clone-191f6",
  storageBucket: "linkedin-clone-191f6.appspot.com",
  messagingSenderId: "545098566194",
  appId: "1:545098566194:web:7e7e7af0f685bfcb3b0a2b",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
