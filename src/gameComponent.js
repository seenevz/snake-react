class GameComponent {
  constructor(width, height, color, x, y) {
    this.color = color
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.speedX = -1
    this.speedY = 0
  }

  update = canvasCtx => {
    canvasCtx.fillStyle = this.color;
    canvasCtx.fillRect(this.x, this.y, this.width, this.height);
  };

  newPos = () => {
    this.x += this.speedX
    this.y += this.speedY
  }
}

export default GameComponent;
