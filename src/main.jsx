import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "animate.css";
import "hover.css";
import App from "./App.jsx";

const firebaseConfig = {
  apiKey: "AIzaSyBkbMvFsIDjFlsKrpGQ7Wi8jCMzDioGR5c",
  authDomain: "proyectoreactjs-d2b5f.firebaseapp.com",
  databaseURL: "https://proyectoreactjs-d2b5f-default-rtdb.firebaseio.com",
  projectId: "proyectoreactjs-d2b5f",
  storageBucket: "proyectoreactjs-d2b5f.appspot.com",
  messagingSenderId: "685733872993",
  appId: "1:685733872993:web:d1a53c74403861fff3b120",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
