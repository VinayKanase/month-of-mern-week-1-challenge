import React from 'react';
import "../css/StartCover.css";

function StartCover({ displayValue, handleOnClickPlay }) {
 return (
  <div className="startCover" style={{ display: displayValue }}>
   <button onClick={handleOnClickPlay}>
    Play
   </button>
  </div>
 )
}

export default StartCover;