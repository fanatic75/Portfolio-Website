import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <Router>
        <div className="App">
          <Routes />
        </div>
    </Router>

  );
}

export default App;
