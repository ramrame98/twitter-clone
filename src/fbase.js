import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeLQl02GOkZStV9_AxreCcV9f-hnssweU",
  authDomain: "oz-ramram-twitter.firebaseapp.com",
  projectId: "oz-ramram-twitter",
  storageBucket: "oz-ramram-twitter.appspot.com",
  messagingSenderId: "694500769838",
  appId: "1:694500769838:web:664f6a9e4e9b7fd3459fbf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const dbFirestore = getFirestore();