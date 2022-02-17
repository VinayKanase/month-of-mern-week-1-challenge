/**
 * Helps in handling number result of game to string message.
 * @param {number} numberChoice -  number between -1 to 1 that is result of game
 * @returns string message of game result
 */

function messageHandler(numberChoice) {
 let messages = [
  "Player Wins 😀, Computer lost",
  "Computer Wins 🤖, Player lost ",
  "Game Tie",
 ];
 return messages[numberChoice >= 0 ? numberChoice : 2];
}

export default messageHandler;