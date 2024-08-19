// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVd0cO5woBzyA1-Fyd0pmKSxCEPCuoK_M",
  authDomain: "waste-management-cc3ee.firebaseapp.com",
  projectId: "waste-management-cc3ee",
  storageBucket: "waste-management-cc3ee.appspot.com",
  messagingSenderId: "1008792100613",
  appId: "1:1008792100613:web:e59c94bbdf647ae82e216c",
  measurementId: "G-KX76R4ZJV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app; 