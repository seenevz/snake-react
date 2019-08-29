import React from "react";

const StartComponent = props => {
  return (
    <button className="button bounce" onClick={props.startGame}>
      Start Game
    </button>
  );
};

export default StartComponent;
