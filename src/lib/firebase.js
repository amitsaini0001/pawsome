import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: 'AIzaSyC0pmXWv9FPZfbJ0Qx2d9VEiHTP-sZUJRc',
  authDomain: 'pawsome-1.firebaseapp.com',
  projectId: 'pawsome-1',
  storageBucket: 'pawsome-1.appspot.com',
  messagingSenderId: '124007457141',
  appId: '1:124007457141:web:20d699e76bc97bb35cb33c',
  measurementId: 'G-4CRXPW6XN4'
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
