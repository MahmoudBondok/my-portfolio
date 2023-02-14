
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBowSc2L-XrIfKg-ssyiUWYzq2fg7YGdyk",
    authDomain: "ahmed-safwat-portfolio.firebaseapp.com",
    projectId: "ahmed-safwat-portfolio",
    storageBucket: "ahmed-safwat-portfolio.appspot.com",
    messagingSenderId: "897949007124",
    appId: "1:897949007124:web:fa0d5001eb1379a3129601",
    measurementId: "G-6W9XB815SF"
  };

    const app = initializeApp(firebaseConfig);
    export   const db = getFirestore(app);
