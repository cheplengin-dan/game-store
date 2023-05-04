import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';

const App = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    fetch('/games.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch games');
        }
        return response.json();
      })
      .then(data => setGames(data.games))
      .catch(error => setError(error.message));
  }, []);

  const handlePurchase = game => {
    alert(`Thank you for purchasing ${game.title} for $${game.price}`);
  };

  const handleRefund = game => {
    alert(`Your refund for ${game.title} for $${game.price} has been processed`);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome to CIYG GameStore</h1>} />
        <Route
          path="/games"
          element={<GameList games={games} setSelectedGame={setSelectedGame} />}
        />
        <Route
          path="/games/:gameId"
          element={<GameDetails game={selectedGame} onPurchase={handlePurchase} onRefund={handleRefund} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
