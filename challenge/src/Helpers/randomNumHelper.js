
/**
 * Creates Random number between min and max number (exculding max number).
 * @param {number} min - Minimum value to be send has random number
 * @param {number} max - Maximun value excluding this value itself to be send has random number
 * @returns randomNumber
 */
function randomNumberGenrator(min, max) {
 return Math.floor(min + (Math.random() * (max - min)));
}

export default randomNumberGenrator;