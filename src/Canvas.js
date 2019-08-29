import React from "react";
import src from "./bckg.jpg";

class Canvas extends React.Component {
  constructor() {
    super();
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.props.getCanvasContext(this.canvasRef.current.getContext("2d"));
  }

  render() {
    return <canvas ref={this.canvasRef} width="300" height="300" />;
  }
}

export default Canvas;
