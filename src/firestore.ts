import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBmSSQr1Nv59VW5ku1AdlBSlmUpo_j5gEA",
  authDomain: "iu-memes.firebaseapp.com",
  projectId: "iu-memes",
  storageBucket: "iu-memes.appspot.com",
  messagingSenderId: "776505991989",
  appId: "1:776505991989:web:7afa7c38578294b179a27c",
  measurementId: "G-QV60N4B0WN"
});

const firestore = firebase.firestore();
const CAPTIONS_COLLECTION = firestore.collection("captions");

export { CAPTIONS_COLLECTION };