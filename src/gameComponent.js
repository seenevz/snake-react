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

  checkCollision = (collisionObj, callback) => {
    const top = this.y - 1
    const bottom = (this.y + this.height) - 1
    const left = this.x - 1
    const right = (this.x + this.width) - 1

    const colObjTop = collisionObj.y
    const colObjBottom = collisionObj.y + collisionObj.height
    const colObjLeft = collisionObj.x
    const colObjRight = collisionObj.x + collisionObj.width



    if ((top < colObjBottom && bottom > colObjBottom) || (bottom > colObjTop && top < colObjTop)) {
      if ((right > colObjLeft && this.speedX > 0) || (left < colObjRight && this.speedX < 0)) {

        debugger
        callback()
      }
    } else if ((right > colObjLeft && left < colObjLeft) || (left < colObjRight && right > colObjRight)) {
      if ((top < colObjBottom && this.speedY > 0) || (bottom > colObjTop && this.speedY < 0)) {
        debugger
        callback()
      }
    }
  }
}

export default GameComponent;
