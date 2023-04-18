// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdhXe6GpmW1a_soGpyl6NCQ-u3kiwjQdQ",
  authDomain: "ztm-crwn-clothing-db-abb63.firebaseapp.com",
  projectId: "ztm-crwn-clothing-db-abb63",
  storageBucket: "ztm-crwn-clothing-db-abb63.appspot.com",
  messagingSenderId: "324453608030",
  appId: "1:324453608030:web:bee0253fe7d270f7fe22cf",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
