import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AutoCorrect from './AutoCorrect.jsx'
function App() {
 const [inputText, setInputText] = useState("")
 const corrections = {
  "teh": "the",
  "recieve": "receive",
  "adress": "address",
  "wierd": "weird",
  "thier": "their"
};

  return (
    <div className='App'>
      <h2>Auto Correct App</h2>
      <input type="text"
        value = {inputText}
        placeholder='Type your text here...'
        onChange={(e)=>setInputText(e.target.value)} 
      />
      <AutoCorrect text={inputText} correctionObj = {corrections}></AutoCorrect>
    </div>
  )
}

export default App
