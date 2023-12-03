import React, {useState} from 'react'
import Navbar1 from './components/Navbar1'
import Textform1 from './components/Textform1'
import Alert from './components/Alert';


export default function App() {

  const[mode,setmode]=useState('light');
  const[alert,setAlert]=useState(null);
  
  const showAlert=(message,type)=>
  {
      setAlert({
        message: message,
        type: type
      })

      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
 
  const modeclick=()=>
  {
    if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert(" Dark Mode is Enabled","success");
    document.title='TextConverter-DarkMode';
    }
    else{
    setmode('light');
    document.body.style.backgroundColor='white';
    showAlert(" Light Mode is Enabled","success");
    document.title='TextConverter-LightMode';
    }
  }

  return (
      <>
      <Navbar1 h1='TextConverter' mode={mode} modeclick={modeclick}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Textform1 showAlert={showAlert} mode={mode}/>
      </div>
      <div className="container my-3">
      </div>
      </>
  )
}
