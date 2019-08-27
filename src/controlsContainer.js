import React from "react";
import StartComponent from "./startComponent";
import ControlsComponent from "./controlsComponent";

class ControlsContainer extends React.Component {
  render() {
    return (
      this.props.isGameOn
        ? <ControlsComponent updateDirection={this.props.updateDirection} />
        : <StartComponent startGame={this.props.startGame} />
    );
  }
}

export default ControlsContainer;
