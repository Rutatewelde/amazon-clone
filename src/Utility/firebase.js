
import firebase from "firebase/compat/app";
// auth
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8HO2cz6wGLa2W5-wq1DU2gQLt7RiPjvU",
  authDomain: "clone-dce14.firebaseapp.com",
  projectId: "clone-dce14",
  storageBucket: "clone-dce14.appspot.com",
  messagingSenderId: "652287517271",
  appId: "1:652287517271:web:25a78b2eea92d0c5ae3912",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()
