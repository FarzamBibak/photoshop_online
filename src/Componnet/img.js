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

        this.onloadImg = this.onloadImg.bind(this);
    }

    onloadImg() {
        const defaultWidth = this.imgRef.current.width,
            defaultHeight = this.imgRef.current.height,
            canvas = this.canvasRef.current,
            ctx = canvas.getContext("2d");

        var dispatch = this.props.dispatch,
            image = new Image();

        dispatch(imgSize(defaultWidth, defaultHeight));

        image.src = this.imgRef.current.src;
        console.log(ctx)
        this.props.dispatch(ctxText(ctx))
        image.onload = function () {
            dispatch(canvasDraw(image, image.width, image.height, ctx, canvas))
        }

        console.log(this.props.bodyWidth, this.props.bodyHeight)
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
