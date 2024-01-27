import './App.css' ;
import React, {useState} from 'react'
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import Alerts from './components/Alerts';




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
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#142d4c';
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
      
      
        <Navbar
          title="TextUtils"
          aboutText="TextAbouts"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alerts alert={Alert} />
        <div className="container my-4" mode={mode}>
          
            
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
             
        </div>
      
        

    </>
    
  );
}

export default App;
