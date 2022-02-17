import computerChoice from "./Helpers/computerChoiceHelper";
import checkWinner_wrt_First from "./Helpers/checkWinnerHelper";
function GameManager() {
 let _playerChoice, _computerChoice;

 const _setComputerChoice = () => {
  _computerChoice = computerChoice();
 };
 const getComputerChoice = () => _computerChoice;
 const setPlayerChoice = (playerChoice) => {
  _playerChoice = playerChoice
  _setComputerChoice();
 };
 const getResults = () => {
  if (_playerChoice === _computerChoice)
   return -1;
  else if (checkWinner_wrt_First(_playerChoice, _computerChoice)) {
   return 1;
  } else if (checkWinner_wrt_First(_computerChoice, _playerChoice)) {
   return 0;
  }
 }
 return { getComputerChoice, setPlayerChoice, getResults };
}

export default GameManager;