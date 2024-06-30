import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/Textform.js';
import About from './components/About.js';
import React, { useState } from 'react';
import Alert from './components/alert.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
      setalert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setalert(null);
      }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#04667a';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about"
           element = { <About mode={mode} /> }
          />
          <Route exact path="/"
          element =  {<TextForm showalert={showAlert} heading="Enter Text over below" mode={mode}/>}
          />
    </Routes>
    </div>
    </Router>
    </> 
  );
}

export default App;