import React from "react";

class Canvas extends React.Component {
  constructor() {
    super();
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.props.getCanvasContext(this.canvasRef.current.getContext("2d"));
  }

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        width="300"
        height="300"
        style={{ border: "1px solid #000000" }}
        onClick={e => alert(`x: ${e.clientX}, y: ${e.clientY}`)}
      />
    );
  }
}

export default Canvas;
