import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBouGRuXQjWIebBs0nxsUpIYr8eGQzi84U",
  authDomain: "e-commerce-53808.firebaseapp.com",
  projectId: "e-commerce-53808",
  storageBucket: "e-commerce-53808.appspot.com",
  messagingSenderId: "958330266624",
  appId: "1:958330266624:web:30165b440cf24a4e9ee4e5"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)
const auth = getAuth(app)
export {fireDB,auth}
