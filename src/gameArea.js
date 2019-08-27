class GameArea {
  constructor(canvasCtx) {
    //need to grab the game area dimensions from the context object
    this.canvasCtx = canvasCtx;
    this.width = this.canvasCtx.canvas.width;
    this.height = this.canvasCtx.canvas.height;
  }

  clear = () => {
    this.canvasCtx.clearRect(0, 0, this.width, this.height);
  };
}

export default GameArea
