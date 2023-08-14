import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCrYGbgGhoHM-gQuflG_KC4W3-HrFBcSNA",
  authDomain: "participle-79e16.firebaseapp.com",
  projectId: "participle-79e16",
  storageBucket: "participle-79e16.appspot.com",
  messagingSenderId: "551659580725",
  appId: "1:551659580725:web:fd0892d8d3d28e6ff4b07c",
  measurementId: "G-97NW45P65W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const dataBase = getFirestore();