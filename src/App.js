import React from "react";
import "./App.css";
import Canvas from "./Canvas";
import ControlsContainer from "./controlsContainer";
import SnakeGame from "./game";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  getCanvasContext = ctx => {
    this.setState({
      canvasCtx: ctx
    });
  };

  startGame = () => {
    if (!this.state.game) {
      const game = new SnakeGame(this.state.canvasCtx, this.endGame);
      this.setState({ game });
      game.startGame()
    } else {
      return
    }
  };

  endGame = () => {
    this.setState({ game: null })
  }

  render() {
    return (
      <div className="App">
        <Canvas getCanvasContext={this.getCanvasContext} />
        <ControlsContainer updateDirection={this.state.game ? this.state.game.pushDirection : null} isGameOn={!!this.state.game} startGame={this.startGame} />
      </div>
    );
  }
}

export default App;
