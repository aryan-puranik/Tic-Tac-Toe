import { useState } from 'react'
import Square from './Square'
import Counter from './Counter';
import Header from './header';
import Footer from './Footer';
import IpAddress from './IpAddress';

export default function Board({players}) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameId, setGameId] = useState(0);
  const greeting = import.meta.env.VITE_GREETINGS


  function handleClick(i) {

    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  // Check if every square is filled (no null values left)
  const isDraw = !winner && !squares.includes(null);

  let status;
  if (winner) {
  status = `Winner: ${winner === "X" ? players.x : players.o}`;
} else if (isDraw) {
  status = "Status: It's a Draw!";
} else {
  status = `Next player: ${xIsNext ? players.x : players.o}`;
}


  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function newGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameId(prev => prev + 1);
  }

  return (
    <>
      <Header />
      <IpAddress />
      <h2>{greeting}</h2>
      <Counter winner_value={winner} gameId={gameId} players={players} />
      <div className="status">{status}</div>
      <button className="restart" onClick={newGame}>Restart</button>
      <div className="Board">
        <div className="Board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="Board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div div className="Board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <Footer />
    </>
  )
}
