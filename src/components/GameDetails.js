import React from 'react';

const GameDetails = ({ game, onPurchase, onRefund }) => {

    // 
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
        <img className="game-details-container" src={game.image} alt={game.title} />
        <h3 className="game-details-container">{game.title}</h3>
        <p className="game-details-container">{game.description}</p>
        <p className="game-details-container">${game.price}</p>
        <button id="purchase-btn" onClick={handlePurchase}>Purchase</button>
        <button id="refund-btn" onClick={handleRefund}>Refund</button>
      </div>
    </div>
  );
};

export default GameDetails;
