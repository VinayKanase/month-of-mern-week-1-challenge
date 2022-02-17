import React from "react";
import "../css/Game.css";
function Game({ playerChoiceHandler, message, playerImgSrc, computerImgSrc }) {
  return (
    <div className="game">
      <h2 className="game__message">{message}</h2>
      <div className="game__images">
        <img src={playerImgSrc} alt="Player" />
        <img src={computerImgSrc} alt="Computer" />
      </div>
      <div className="game__playerChoiceBtns">
        <button onClick={playerChoiceHandler} className="game__btn">Fire</button>
        <button onClick={playerChoiceHandler} className="game__btn">Water</button>
        <button onClick={playerChoiceHandler} className="game__btn">Tree</button>
      </div>
    </div>
  );
}

export default Game;
