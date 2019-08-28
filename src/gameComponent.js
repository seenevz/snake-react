class GameComponent {
  constructor(width, height, color, x, y, speedX = 0, speedY = -10, ctx) {
    this.color = color
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.speedX = speedX
    this.speedY = speedY
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
    if (this.x < 0 || this.x > this.canvasCtx.canvas.width - 10) {
      this.x < 0
        ? this.x = this.canvasCtx.canvas.width
        : this.x = 0
    } else if (this.y < 0 || this.y > this.canvasCtx.canvas.height - 10) {
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
    const keys = {
      up: ['ArrowUp', 'w'],
      down: ['ArrowDown', 's'],
      right: ['ArrowRight', 'd'],
      left: ['ArrowLeft', 'a']
    }

    switch (true) {
      case keys.left.includes(direction):
        this.moveLeft()
        break;
      case keys.right.includes(direction):
        this.moveRight()
        break
      case keys.up.includes(direction):
        this.moveUp()
        break
      case keys.down.includes(direction):
        this.moveDown()
        break
      default:
        break;
    }
  }

  checkCollision = (collisionObj, callback) => {
    const relativeX = (this.x + this.width / 2) - (collisionObj.x + collisionObj.width / 2)
    const relativeY = (this.y + this.width / 2) - (collisionObj.y + collisionObj.width / 2)

    if (relativeX === 0 && relativeY === 0) {
      callback()
    }
  }
}

export default GameComponent;
