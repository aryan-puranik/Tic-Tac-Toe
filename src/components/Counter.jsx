import { useState, useEffect } from "react";

export default function Counter({ winner_value, gameId }) {
  const [countX, setCountX] = useState(0);
  const [countO, setCountO] = useState(0);

  useEffect(() => {
    if (winner_value === "X") {
      setCountX((prev) => prev + 1);
    } else if (winner_value === "O") {
      setCountO((prev) => prev + 1);
    }
  }, [gameId, winner_value]); 

  return (
    <div className="scoreboard-container">
      <h2 className="scoreboard-title">SCOREBOARD</h2>
      <div className="scoreboard">
        <div className="score-box x-team">
          <span className="player-name">PLAYER X</span>
          <div className="score-display">{countX}</div>
        </div>
        
        <div className="score-divider">:</div>

        <div className="score-box o-team">
          <span className="player-name">PLAYER O</span>
          <div className="score-display">{countO}</div>
        </div>
      </div>
    </div>
  );
}