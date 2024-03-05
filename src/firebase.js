// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlxtyFx6_ZQYX_PGwhj87S2ESNnGxT-JM",
  authDomain: "misappdelibros.firebaseapp.com",
  projectId: "misappdelibros",
  storageBucket: "misappdelibros.appspot.com",
  messagingSenderId: "725241774687",
  appId: "1:725241774687:web:75f83d011c2f47cd9751ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getAuth } from "firebase/auth"; //inizializando autentificador correo contraseña
export const auth = getAuth(app);