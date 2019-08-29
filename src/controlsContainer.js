import React from "react";
import StartComponent from "./startComponent";
import ControlsComponent from "./controlsComponent";

class ControlsContainer extends React.Component {
  render() {
    return (
      <div className="footDiv">
        {this.props.isGameOn ? (
          <ControlsComponent updateDirection={this.props.updateDirection} />
        ) : (
          <StartComponent startGame={this.props.startGame} />
        )}
      </div>
    );
  }
}

export default ControlsContainer;
