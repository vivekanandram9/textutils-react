import './App.css' ;
import React, {useState} from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import Alerts from './components/Alerts';
import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {
 const [mode, setMode] = useState('light'); // whether dark mode in enabled or not
 const [Alert, setAlert] = useState(null)
 const showAlert = (message , type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setAlert(null)
      
     }, 3000);

 }
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  } 
  
 
  
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils2"
          aboutText="TextAbouts"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alerts alert={Alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/About" element={<About   mode={mode}/>}></Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text to analyze " mode={mode}/>}  ></Route>
          </Routes>
              
              
           
         
        </div>
      </BrowserRouter>
        
    </>
  );
 }

export default App;
