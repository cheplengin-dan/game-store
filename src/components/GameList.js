import React from 'react';
import { Link } from 'react-router-dom';

const GameList = ({ games, setSelectedGame }) => {
  const handleGameClick = game => {
    setSelectedGame(game);
  };

  return (
    <div className="game-list-container">
      {games.map(game => (
        <div className="game-item" key={game.id} onClick={() => handleGameClick(game)}>
          <Link to={`/games/${game.id}`}>
            <img src={game.image} alt={game.title} />
            <h3>{game.title}</h3>
            <p>{game.description}</p>
            <p>${game.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GameList;