import GameComponent from "./gameComponent";
import GameArea from "./gameArea";

class SnakeGame {
  constructor(ctx) {
    this.canvasCtx = ctx;
    // this.movementDirection = 'left'
    this.updateInterval = null
    this.directionStack = []
  }

  startGame = () => {
    this.gameArea = new GameArea(this.canvasCtx);

    this.snake = this.createSnake(10)
    // debugger
    this.updateInterval = setInterval(this.updateGame, 500);
  };


  // Need to find a way to check if the direction and the position are matching
  // check x and y speed and direction at time of changing direction
  updateGame = () => {
    this.gameArea.clear();
    // debugger
    this.snake.forEach(snakeComponent => {
      if (this.directionStack.length > 0) {
        this.directionStack.forEach(direction => {
          if (snakeComponent.x === direction.x && snakeComponent.y === direction.y) {
            snakeComponent.changeDirection(direction.direction);
            ++direction.counter
          }
          if (direction.counter === this.snake.length) { this.directionStack.shift() }
        })
      }
      snakeComponent.newPos()
      snakeComponent.update()
    });
    console.log(this.directionStack)
  };

  createSnake = bodyLength => {
    let snake = [];
    for (let i = 0; i < bodyLength; i++) {
      const x = (this.canvasCtx.canvas.width / 2) + i * 10
      const snakeComponent = new GameComponent(
        10,
        10,
        "black",
        x,
        this.canvasCtx.canvas.height / 2,
        this.canvasCtx
      )
      snake.push(snakeComponent)
    }
    return snake
  }

  pushDirection = (movementDirection) => {
    const directionObj = {
      x: this.snake[0].x,
      y: this.snake[0].y,
      direction: movementDirection,
      counter: 0
    }
    if (((movementDirection === 'ArrowUp' || movementDirection === 'ArrowDown') && this.snake[0].speedY) || ((movementDirection === 'ArrowLeft' || movementDirection === 'ArrowRight') && this.snake[0].speedX)) {
      return
    }
    console.log('Direction being pushed: ', directionObj)
    this.directionStack.push(directionObj)
  }
}

export default SnakeGame;
