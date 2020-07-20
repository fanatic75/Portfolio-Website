import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import "./styles/App.css";
import useDarkMode from 'use-dark-mode';
import "firebase/analytics";
import firebase from 'firebase/app';
export const  ThemeContext = React.createContext("dark-mode");

const App: React.FC = () => {
 
  useState(()=>{
    firebase.initializeApp({
      apiKey: "AIzaSyBi36Ln28QqyzmU-o4EHXspMAdHWi0bfow",
      authDomain: "portfolio-29a59.firebaseapp.com",
      databaseURL: "https://portfolio-29a59.firebaseio.com",
      projectId: "portfolio-29a59",
      storageBucket: "portfolio-29a59.appspot.com",
      messagingSenderId: "409595576323",
      appId: "1:409595576323:web:3d26cab2e6c20a854ace36",
      measurementId: "G-39PW8DPL6G"
    });
    firebase.analytics(); 
  });
  
  const darkMode = useDarkMode();
  return (
    <Router>
      <ThemeContext.Provider value={darkMode.value?"dark-mode":"light-mode"}>
        <div className="App">
          <Routes />
        </div>
        </ThemeContext.Provider>
    </Router>

  );
}

export default App;
