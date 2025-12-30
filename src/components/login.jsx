import React, { useState } from 'react';

const PlayerLogin = ({ onStartGame }) => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player1 && player2) {
      onStartGame(player1, player2);
    } else {
      alert("Please enter names for both players!");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Tic-Tac-Toe</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Player X:</label>
          <input 
            type="text" 
            value={player1} 
            onChange={(e) => setPlayer1(e.target.value)} 
            placeholder="Enter Name"
            required 
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Player O:</label>
          <input 
            type="text" 
            value={player2} 
            onChange={(e) => setPlayer2(e.target.value)} 
            placeholder="Enter Name"
            required 
          />
        </div>
        <button type="submit" style={styles.button}>Start Game</button>
      </form>
    </div>
  );
};

// Simple inline styles for layout
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left'
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default PlayerLogin;