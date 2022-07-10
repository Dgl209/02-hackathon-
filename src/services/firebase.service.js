import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBmYOL_bwpeK6P_hwUD-LYZquvOYdXNgjk",
  authDomain: "hackathon-86896.firebaseapp.com",
  databaseURL:
    "https://hackathon-86896-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hackathon-86896",
  storageBucket: "hackathon-86896.appspot.com",
  messagingSenderId: "1820065941",
  appId: "1:1820065941:web:409696d26070dec7a49b9c",
};

const firebaseService = initializeApp(firebaseConfig);

export default firebaseService;
