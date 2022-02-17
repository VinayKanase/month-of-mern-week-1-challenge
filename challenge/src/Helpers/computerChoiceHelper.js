import randomNumberGenrator from "./randomNumHelper";

/**
 * Selects computer choice in random number format.
 * @returns Computer choice has number    
 */
function computerChoice() {
  return randomNumberGenrator(0, 3);
}

export default computerChoice;