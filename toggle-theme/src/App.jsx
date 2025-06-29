import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [theme , setTheme] = useState('');

  const data = [ {name : "Rahul", age : 27},
    {name : "Anjali", age : 25},
    {name : "Raj", age : 26}
  ];

  useEffect(()=>{
    setTheme(localStorage.getItem('theme') || 'light')
  },[])   
  
  
  return (                 
    <>   
      <body className={theme}>
      </body>        
      <div className={theme}>
        { theme == 'dark'  && <span className="material-symbols-outlined" onClick={()=>{
          setTheme('light');
          localStorage.setItem('theme', 'light');
        }}>light_mode</span>}
        { theme == 'light'  && <span className="material-symbols-outlined" onClick={()=>{
          setTheme('dark');
          localStorage.setItem('theme', 'dark')
        }}>dark_mode</span>}

      </div>    
      <div className={theme}>
        {                                                     
        data.map((item)=>( <Card {...item} />))             
        }  
      </div>           
    </>
  )
}

export default App
