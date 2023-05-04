# CIYG GameStore
CIGY GameStore is a simple web app that allows users to view a list of games and their details, and purchase or refund a game.

## Installation
Clone the repository to your local machine.
Install the required dependencies by running 'npm install && npm i react-router-dom' in the root directory.

## Usage
Start the app by running 'npm start' in the root directory.
Navigate to 'http://localhost:3000' in your web browser.
Click on the "Games" link in the navigation bar to view the list of games.
Click on a game to view its details.
Click on the "Purchase" button to purchase the game or the "Refund" button to refund it.

## Components

## App.js
This is the main component of the app that renders the navigation bar, and uses react-router-dom to render the appropriate components based on the current URL. The 'handlePurchase' and 'handleRefund' functions are passed as props to the 'GameDetails' component.

## GameList.js
This component renders the list of games using map, and each game item is wrapped in a Link component from react-router-dom. When a game item is clicked in the 'GameList' component, the 'setSelectedGame' function will be called with the selected game as an argument.

## GameDetails.js
This component renders the details of a single game, along with buttons to purchase or refund the game. The 'onPurchase' and 'onRefund' props are functions that will be called when the corresponding button is clicked.

## Credits
This app was created by cheplengin-dan as a part of phase-2-project. It uses the following technologies:

React
react-router-dom
