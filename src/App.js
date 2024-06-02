
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React from 'react';
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = 'rgb(51 58 80)';
      showAlert("dark theme enabled.", 'success');
    }
    else {
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light theme enabled.", 'success');
    }
  }

  return (
  
      <Router>
        <Navbar title="Srikant" about="AboutUs" theme={theme} changeTheme={changeTheme} showAlert={showAlert} />
        <Alert alert={alert} />
        <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <div className="container my-3">
           <Textform title="Enter Some Text...." theme={theme} />
        </div>
        </div>
      </Router>
    
  );
}

export default App;
