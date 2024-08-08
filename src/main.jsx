import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHIUx2_NrnFhhgaX_PALb3RtRJNp_X-e8",
  authDomain: "parfum-argentina.firebaseapp.com",
  projectId: "parfum-argentina",
  storageBucket: "parfum-argentina.appspot.com",
  messagingSenderId: "941555271196",
  appId: "1:941555271196:web:c38aca9313d758814201d9",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
