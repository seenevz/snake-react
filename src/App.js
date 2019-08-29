import React from "react";
import "./App.css";
import Canvas from "./Canvas";
import ControlsContainer from "./controlsContainer";
import SnakeGame from "./game";
import Score from "./scoreComponent";
import Title from "./titleComponent";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameScore: 0
    };
  }

  getCanvasContext = ctx => {
    this.setState({
      canvasCtx: ctx
    });
  };

  startGame = () => {
    if (!this.state.game) {
      const game = new SnakeGame(
        this.state.canvasCtx,
        this.updateScore,
        this.endGame
      );
      this.setState({ game });
      game.startGame();
    } else {
      return;
    }
  };

  updateScore = gameScore => {
    this.setState({ gameScore });
  };

  endGame = () => {
    this.setState({ game: null, gameScore: 0 });
  };

  render() {
    return (
      <div className="App">
        <header>
          {this.state.game ? <Score score={this.state.gameScore} /> : <Title />}
        </header>
        <Canvas getCanvasContext={this.getCanvasContext} />
        <ControlsContainer
          updateDirection={
            this.state.game ? this.state.game.pushDirection : null
          }
          isGameOn={!!this.state.game}
          startGame={this.startGame}
        />
      </div>
    );
  }
}

export default App;
