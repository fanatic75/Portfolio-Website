import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider,withTheme } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core/styles";
import Routes from "./Routes";
import "./styles/App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121"
    },
    secondary: {
      main: "#fafafa"
    }

  }
});
const App: React.FC = () => {
  return (
    <Router>
       <ThemeProvider theme={theme}>
      <div className="App">
        <Routes />
      </div>
      </ThemeProvider>
    </Router>

  );
}

export default withTheme(App);
