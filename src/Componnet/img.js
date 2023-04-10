// img.js

import React from "react";
import { connect } from 'react-redux';
import imgSize from "../Actions/imgSize";
import canvasDraw from "../Actions/canvasDraw";
import ctxText from "../Actions/settingCTX";
import '../static/css/main.css';

class Img extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
    this.imgRef = React.createRef();
    this.canvasStyleRef = React.createRef();
    this.ctxRef = React.createRef(null);

    this.state = {
      isDrawing: false,
      lineWidth: 5,
      lineColor: "black",
      lineOpacity: 0.1,
    };

    this.onloadImg = this.onloadImg.bind(this);
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = this.state.lineOpacity;
    ctx.strokeStyle = this.state.lineColor;
    ctx.lineWidth = this.state.lineWidth;
    this.ctxRef.current = ctx;
  }

  startDrawing = (e) => {
    this.ctxRef.current.beginPath();
    this.ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    this.setState({ isDrawing: true });
  };

  endDrawing = () => {
    this.ctxRef.current.closePath();
    this.setState({ isDrawing: false });
  };

  draw = (e) => {
    if (!this.state.isDrawing) {
      return;
    }
    this.ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    this.ctxRef.current.stroke();
  };

  onloadImg() {
    const defaultWidth = this.imgRef.current.width,
      defaultHeight = this.imgRef.current.height,
      canvas = this.canvasRef.current,
      ctx = canvas.getContext("2d");

    var dispatch = this.props.dispatch,
      image = new Image();

    dispatch(imgSize(defaultWidth, defaultHeight));

    image.src = this.imgRef.current.src;
    this.props.dispatch(ctxText(ctx))
    image.onload = function () {
      dispatch(canvasDraw(image, image.width, image.height, ctx, canvas))
    }
  };
  setLineColor = (color) => {
    this.setState({ lineColor: color });
  };

  setLineWidth = (width) => {
    this.setState({ lineWidth: width });
  };

  setLineOpacity = (opacity) => {
    this.setState({ lineOpacity: opacity });
  };
  render() {
    return (
      <div className="imgCanvas">
        <img
          ref={this.imgRef}
          src={this.props.Image_src}
          onLoad={this.onloadImg}
          style={{ display: "none" }}
          img-load={this.props.imgLoad}
        />
        <canvas
          ref={this.canvasRef}
          width={this.props.imgDefaultWidth}
          height={this.props.imgDefaultHeight}
          onMouseDown={this.startDrawing}
          onMouseUp={this.endDrawing}
          onMouseMove={this.draw}
          className="canvas"
          style={{
            filter: this.props.canvasStyle.filter,
            transform: this.props.rotateAngle,
            width: this.props.canvasStyleWidth * this.props.zoomUseValue,
          }}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    Image_src: state.Image_src,
    bodyWidth: state.bodyWidth,
    bodyHeight: state.bodyHeight,
    imgWidth: state.imgWidth,
    imgHeight: state.imgHeight,
    imgDefaultWidth: state.imgDefaultWidth,
    imgDefaultHeight: state.imgDefaultHeight,
    zoomUseValue: state.zoomUseValue,
    imgLoad: state.imgLoad,
    canvasStyleWidth: state.canvasStyleWidth,
    canvasStyleHeight: state.canvasStyleHeight,
    canvasStyle: state.canvasStyle,
    rotateAngle: state.rotateAngle
  }
}

export default connect(mapStateToProps)(Img);
