
/**
 * This function checks if game is Won or Lost with respect to first choice made
 * That is if choice 1 wins it returns true else false.
 * @param {number} choice1 - choice 1 of game
 * @param {number} choice2 - choice 2 of game
 * @returns boolean
 */
function checkWinner_wrt_First(choice1, choice2) {
 return (choice1 === 0 && choice2 === 1) || (choice1 === 1 && choice2 === 2) || (choice1 === 2 && choice2 === 0);
}

export default checkWinner_wrt_First;