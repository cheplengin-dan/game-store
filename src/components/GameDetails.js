// This component renders the details of a single game, along with buttons to purchase or refund the game. The onPurchase and onRefund props are functions that will be called when the corresponding button is clicked.

import React from 'react';

const GameDetails = ({ game, onPurchase, onRefund }) => {

    // the component will display "Loading..." until the game object is loaded and exists.
  if (!game) {
    return <div>Loading...</div>;
  }

  //  handlePurchase and handleRefund which will call the onPurchase and onRefund functions respectively with the game object as an argument. We then added these functions as event handlers to the purchase and refund buttons.


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
