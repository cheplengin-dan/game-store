// This component renders the list of games using map, and each game item is wrapped in a Link component from react-router-dom.

import React from 'react';
import { Link } from 'react-router-dom';

// when a game item is clicked in the GameList component, the setSelectedGame function will be called with the selected game as an argument
const GameList = ({ games, setSelectedGame }) => {
  const handleGameClick = game => {
    setSelectedGame(game);
  };

  // the onClick event is added to each game item in the GameList component that calls the setSelectedGame function & then passes in the game object as an argument.
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