import GameComponent from "./gameComponent";
import GameArea from "./gameArea";

class SnakeGame {
  constructor(ctx) {
    this.canvasCtx = ctx;
    this.updateInterval = null
    this.directionStack = []
  }

  startGame = () => {
    this.gameArea = new GameArea(this.canvasCtx);

    this.snake = this.createSnake(10)
    this.food = this.createFood()
    this.updateInterval = setInterval(this.updateGame, 500);
  };


  // Need to find a way to check if the direction and the position are matching
  // check x and y speed and direction at time of changing direction
  updateGame = () => {
    const snakeHead = this.snake[0]
    const snakeBody = this.snake.slice(1)
    this.gameArea.clear();

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

    snakeHead.checkCollision(this.food, () => { console.log('Collision!'); this.handleAddSnakeComponent() })
    snakeBody.forEach(snakeComponent => snakeHead.checkCollision(snakeComponent, this.stopGame))
    this.food.update()
  };

  reSpawnFood = () => {
    this.food = this.createFood()
  }

  handleAddSnakeComponent = () => {
    const snakeTail = this.snake[this.snake.length - 1]
    let x = snakeTail.x
    let y = snakeTail.y

    if (snakeTail.speedX !== 0) {
      snakeTail.speedX > 0 ? x = snakeTail.x - 10 : x = snakeTail.x + 10
    } else if (snakeTail.speedY !== 0) {
      snakeTail.speedY > 0 ? y = snakeTail.y - 10 : y = snakeTail.y + 10
    }

    const speedX = snakeTail.speedX
    const speedY = snakeTail.speedY

    const snakeComponent = this.snakeComponent(x, y, speedX, speedY)
    this.snake.push(snakeComponent)
    this.reSpawnFood()
  }

  stopGame = () => {
    clearInterval(this.updateInterval)
  }

  snakeComponent = (x, y, speedX, speedY) => {
    return new GameComponent(10, 10, "black", x, y, speedX, speedY, this.canvasCtx)
  }

  roundDozen = (n) => {
    const rest = n % 10

    return rest > 4 ? Math.ceil(n / 10) * 10 : Math.floor(n / 10) * 10
  }

  getGridPosition = (canvas) => {
    const width = canvas.width
    const height = canvas.height

    const x = Math.floor(Math.random() * width)
    const y = Math.floor(Math.random() * height)

    return {
      x: this.roundDozen(x),
      y: this.roundDozen(y)
    }

  }

  createSnake = bodyLength => {
    let snake = [];
    for (let i = 0; i < bodyLength; i++) {
      const x = (this.canvasCtx.canvas.width / 2) + i * 10
      const y = this.canvasCtx.canvas.height / 2
      const snakeComponent = this.snakeComponent(x, y, -10, 0)
      snake.push(snakeComponent)
    }
    return snake
  }

  createFood = () => {
    const coords = this.getGridPosition(this.canvasCtx.canvas)

    return new GameComponent(10, 10, 'grey', coords.x, coords.y, 0, 0, this.canvasCtx)
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
    this.directionStack.push(directionObj)
  }
}

export default SnakeGame;
