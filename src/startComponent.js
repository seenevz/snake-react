import React from "react";

const StartComponent = props => {
  return (
    <div>
      <button onClick={props.startGame}>Start Game</button>
    </div>
  )
}

export default StartComponent