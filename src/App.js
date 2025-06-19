import { useState } from 'react';
import './App.css';
import About from './components/About'; 
import Navbar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
        if (mode === 'light') {
          setMode('dark');
          document.body.style.backgroundColor = '#262e45';
          showAlert("Dark mode enabled!!", "success");
          document.title = "Aaditya - DarkMode";
        } else {
          setMode('light');
          document.body.style.backgroundColor = 'white';
          showAlert("Light mode enabled!!", "success");
          document.title = "Aaditya - LightMode";
        }
  };

  return (
    <Router>   
    <>
      <Navbar title="MyApp" home="Home" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About  mode={mode}/>} />
          <Route exact path="/" element={
            <TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />
          } />
        </Routes> 
        
      </div>
    </>
    </Router>
  );
}

export default App;
