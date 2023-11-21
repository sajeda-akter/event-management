// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdKkUt_262lXI_92rvWS4O1-ysVI1x0xI",
  authDomain: "social-event-management-cf69b.firebaseapp.com",
  projectId: "social-event-management-cf69b",
  storageBucket: "social-event-management-cf69b.appspot.com",
  messagingSenderId: "6599557871",
  appId: "1:6599557871:web:470fb24e385e079d07511a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)