import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCcm7tP7vlRAJTIoZCi1CrNcIL8vq3JPpE",
  authDomain: "participleplus.firebaseapp.com",
  projectId: "participleplus",
  storageBucket: "participleplus.appspot.com",
  messagingSenderId: "120364592910",
  appId: "1:120364592910:web:c25c44eb7a87b94769b15f",
  measurementId: "G-G82BKQSH4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
