import React from 'react';

const GameDetails = ({ game, onPurchase, onRefund }) => {
  if (!game) {
    return <div>Loading...</div>;
  }

  const handlePurchase = () => {
    onPurchase(game);
  };

  const handleRefund = () => {
    onRefund(game);
  };

  return (
    <div className="game-details-container">
      <div className="game-details">
        <img src={game.image} alt={game.title} />
        <h3>{game.title}</h3>
        <p>{game.description}</p>
        <p>${game.price}</p>
        <button onClick={handlePurchase}>Purchase</button>
        <button onClick={handleRefund}>Refund</button>
      </div>
    </div>
  );
};

export default GameDetails;
