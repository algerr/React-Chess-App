import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

//you can either add your firebase config directly like in the tutorial or can also add it as an 
//json string like here https://create-react-app.dev/docs/adding-custom-environment-variables/

const firebaseConfig = {
  apiKey: "AIzaSyCXYhiDT_QCSTWxKAz0LjUbzh-bXMOzafo",
  authDomain: "react-chess-5be2b.firebaseapp.com",
  projectId: "react-chess-5be2b",
  storageBucket: "react-chess-5be2b.appspot.com",
  messagingSenderId: "414379082517",
  appId: "1:414379082517:web:bf4c61d7ff1d4caa7b5f1c"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const auth = firebase.auth()
export default firebase