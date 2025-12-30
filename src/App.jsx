import { useState } from 'react' 
import './App.css'
import Board from './components/Board'
import PlayerLogin from './components/login'

function App() {
  const [players, setPlayers] = useState(null);

  const handleStart = (p1, p2) => {
    setPlayers({ x: p1, o: p2 });
  };
  return (
    <> 
      <div>
      {!players ? (
        <PlayerLogin onStartGame={handleStart} />
      ) : (
        <Board players={players} />
      )}
    </div> 
    </>
  )
}

export default App