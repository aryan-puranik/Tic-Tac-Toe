import { useState, useEffect } from 'react' 
import './App.css'
import Header from './components/header'
import Footer from './components/Footer'
import Board from './components/Board'
import IpAddress from './components/IpAddress'
import Counter from './components/Counter'

function App() {
  const greeting = import.meta.env.VITE_GREETINGS
  const [count, setCount] = useState(0)
  
  // 2. Define the state for the IP address
  

  return (
    <>
      
      
      <div className="card">
        <Header/>
        <h2>{greeting}</h2>
        <IpAddress/>
        <Board />
        <Footer/>
      </div>
  
      
    </>
  )
}

export default App