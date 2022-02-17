import StartCover from "./Components/StartCover";
import Game from "./Components/Game";
import "./css/App.css";
import GameManager from "./GameManager";
import { choiceStringToNumber } from "./Helpers/choiceConverter";
import messageHandler from "./Helpers/messageHelper";
import { useState } from "react";

import ComputerDefaultImg from './assets/computer.png';
import PlayerDefaultImg from './assets/player.png';

import fireGif from "./assets/fire.webp";
import treeGif from "./assets/tree.webp";
import waterGif from "./assets/water.webp";


let images = [fireGif, waterGif, treeGif];
let gameManager = GameManager();
let on = false;
function App() {
  const [message, setMessage] = useState("");
  const [playerImgSrc, setPlayerImgSrc] = useState(PlayerDefaultImg)
  const [computerImgSrc, setComputerImgSrc] = useState(ComputerDefaultImg);
  const [displayValue, setDisplayValue] = useState("");

  function resetGame() {
    setTimeout(() => {
      setPlayerImgSrc(PlayerDefaultImg);
      setComputerImgSrc(ComputerDefaultImg);
      on = false;
      setDisplayValue("");
    }, 2000);
  }

  function playerChoiceHandler(e) {
    if (!on) {
      let playerChoice = choiceStringToNumber(e.target.innerText.trim().toLowerCase());
      gameManager.setPlayerChoice(playerChoice);
      on = true;
      setPlayerImgSrc(images[playerChoice]);
      setComputerImgSrc(images[gameManager.getComputerChoice()]);
      setMessage(messageHandler(gameManager.getResults()));
      resetGame();
    }
  }
  function handleOnClickPlay() {
    setDisplayValue("none");
    setMessage("Choose your option");
  }
  return (
    <div className="app">
      <h1 className="app__heading">
        Fire, Water, Tree
      </h1>
      <StartCover displayValue={displayValue} handleOnClickPlay={handleOnClickPlay} />
      <Game playerChoiceHandler={playerChoiceHandler} message={message} playerImgSrc={playerImgSrc} computerImgSrc={computerImgSrc} />
    </div>
  );
}

export default App;
