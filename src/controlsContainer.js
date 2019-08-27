import React from "react";

class ControlsContainer extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.startGame}>Start Game</button>
      </div>
    );
  }
}

export default ControlsContainer;
