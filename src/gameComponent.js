class GameComponent {
  constructor(width, height, color, x, y, ctx) {
    this.color = color
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.speedX = -10
    this.speedY = 0
    this.canvasCtx = ctx
  }

  update = () => {
    this.canvasCtx.fillStyle = this.color;
    this.canvasCtx.fillRect(this.x, this.y, this.width, this.height);
  };

  newPos = () => {
    this.x += this.speedX
    this.y += this.speedY
    this.checkBoundaries()
  }

  checkBoundaries = () => {
    if (this.x < 0 || this.x > this.canvasCtx.canvas.width) {
      this.x < 0
        ? this.x = this.canvasCtx.canvas.width
        : this.x = 0
    } else if (this.y < 0 || this.y > this.canvasCtx.canvas.height) {
      this.y < 0
        ? this.y = this.canvasCtx.canvas.height
        : this.y = 0
    }
  }

  moveUp = () => {
    if (this.speedY === -1 && this.speedX === 0) {
      return
    }
    this.speedY = -10
    this.speedX = 0
  }

  moveDown = () => {
    if (this.speedY === 1 && this.speedX === 0) {
      return
    }
    this.speedY = 10
    this.speedX = 0
  }

  moveLeft = () => {
    if (this.speedY === 0 && this.speedX === 1) {
      return
    }
    this.speedY = 0
    this.speedX = -10
  }

  moveRight = () => {
    if (this.speedY === 0 && this.speedX === 1) {
      return
    }
    this.speedY = 0
    this.speedX = 10
  }

  changeDirection = direction => {
    switch (direction) {
      case 'ArrowLeft' || 'a':
        this.moveLeft()
        break;
      case 'ArrowRight' || 'd':
        this.moveRight()
        break
      case 'ArrowUp' || 'w':
        this.moveUp()
        break
      case 'ArrowDown' || 's':
        this.moveDown()
        break
      default:
        break;
    }
  }
}

export default GameComponent;
