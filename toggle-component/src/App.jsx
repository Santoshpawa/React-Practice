import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className='toggleContainer' style={{backgroundColor: toggle ? "#14d13d" : "#f54b2d"}}>
        {
          !toggle && <><div className="botton" onClick = {()=>setToggle(true)}></div>
        <p className='off'onClick = {()=>setToggle(true)}>Off</p></>
        }
        { toggle && <><p className='on' onClick = {()=>setToggle(false)}>On</p>
         <div className="botton" onClick = {()=>setToggle(false)}></div></>}
       
        
      </div>
    </>
  )
}

export default App
