import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Environment from "../env";

const firebaseConfig = {
  apiKey: Environment.VITE_FIREBASE_API_KEY,
  authDomain: Environment.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: Environment.VITE_FIREBASE_PROJECT_ID,
  storageBucket: Environment.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Environment.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: Environment.VITE_FIREBASE_APP_ID,
  measurementId: Environment.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const authFireBase = getAuth(app);

export default authFireBase;
