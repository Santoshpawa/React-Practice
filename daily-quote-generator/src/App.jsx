import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [quote, setQuote] = useState('');
  const [author , setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    fetchQuote();
    const timer = setInterval(()=>{
       fetchQuote();
    }, 10000)
    return ()=> clearInterval(timer)
  },[])

  const fetchQuote = async()=>{
      setQuote('Loading...')
      setAuthor('')
      setLoading(true);
    try {
      const response = await axios.get('https://api.quotable.io/random');
       
      setQuote(response.data.content);
      setAuthor(response.data.author);
      
    } catch (error) {
        console.log(error.message)
        setQuote('Failed to load Quote')
    } finally{
      setLoading(false);
    }
    }

  return (
    <>
      <p>{quote}</p>
      <p>{author}</p>
      <button onClick={fetchQuote}>New Quote</button>
    </>
  )
}

export default App
