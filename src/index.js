import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";

// ! Init FIREBASE
// This import loads the firebase namespace.
import firebase from "firebase";

// These imports load individual services into the firebase namespace.
import "firebase/auth";
import 'firebase/firestore';
import "firebase/database";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD669lZQXj6ddr2l5lv0AAiw0Z-Jnx24Es",
  authDomain: "web-messenger-95897.firebaseapp.com",
  projectId: "web-messenger-95897",
  storageBucket: "web-messenger-95897.appspot.com",
  messagingSenderId: "718802309815",
  appId: "1:718802309815:web:2680a913bff9f5d82ef332",
  measurementId: "G-YFJW2ZPWXL",
};

firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
