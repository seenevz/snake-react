import GameComponent from "./gameComponent";
import GameArea from "./gameArea";

class SnakeGame {
  constructor(ctx) {
    this.canvasCtx = ctx;
    this.movementDirection = 'left'
    this.updateInterval = null
  }

  startGame = () => {
    this.gameArea = new GameArea(this.canvasCtx);

    this.snakeComponent = new GameComponent(
      10,
      10,
      "black",
      this.canvasCtx.canvas.width / 2,
      this.canvasCtx.canvas.height / 2
    );
    // debugger
    this.updateInterval = setInterval(this.updateGame, 500);
  };

  updateGame = () => {
    this.gameArea.clear();
    this.snakeComponent.newPos()
    this.snakeComponent.update(this.canvasCtx);
  };



  moveUp = () => {
    if (this.snakeComponent.speedY === -1 && this.snakeComponent.speedX === 0) {
      return
    }
    this.snakeComponent.speedY = 1
    this.snakeComponent.speedX = 0
  }

  moveDown = () => {
    if (this.snakeComponent.speedY === 1 && this.snakeComponent.speedX === 0) {
      return
    }
    this.snakeComponent.speedY = -1
    this.snakeComponent.speedX = 0
  }

  moveLeft = () => {
    if (this.snakeComponent.speedY === 0 && this.snakeComponent.speedX === 1) {
      return
    }
    this.snakeComponent.speedY = 0
    this.snakeComponent.speedX = -1
  }

  moveRight = () => {
    if (this.snakeComponent.speedY === 0 && this.snakeComponent.speedX === 1) {
      return
    }
    this.snakeComponent.speedY = 0
    this.snakeComponent.speedX = 1
  }

  changeDirection = () => {
    switch (this.movementDirection) {
      case 'left':
        this.moveLeft()
        break;
      case 'right':
        this.moveRight()
        break
      case 'up':
        this.moveUp()
        break
      case 'down':
        this.moveDown()
        break
      default:
        break;
    }
  }
}

export default SnakeGame;
