// img.js

import React from "react";
import { connect } from 'react-redux';
import imgSize from "../Actions/imgSize";
import canvasDraw from "../Actions/canvasDraw";
// import canvasStyleSet from '../Actions/canvasStyleSet'
// import Canvas from './canvas'
import '../static/css/main.css';

class Img extends React.Component {
    constructor(props) {
        super(props);

        this.canvasRef = React.createRef();
        this.imgRef = React.createRef();

        this.state = {
            zoom: 1,
            width: '',
            height: '',
        }

        this.onloadImg = this.onloadImg.bind(this);
    }

    onloadImg() {
        const defaultWidth = this.imgRef.current.width;
        const defaultHeight = this.imgRef.current.height;

        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext("2d");

        var dispatch = this.props.dispatch;
        // var zoom = this.props.zoomUseValue;
        var image = new Image();

        dispatch(imgSize(defaultWidth, defaultHeight));

        image.src = this.imgRef.current.src;
        image.onload = function () {
            dispatch(canvasDraw(image, image.width, image.height, ctx))
        }

        this.canvasRef.current.style.width = parseFloat(this.props.canvasStyleWidth) + "px";
        this.canvasRef.current.style.height = parseFloat(this.props.canvasStyleHeight) + "px";
    };

    render() {
        return (
            <div>
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
                    className="imgCanvas"
                    style={{
                        width: this.props.canvasStyleWidth * this.props.zoomUseValue,
                    }}
                />
                {/* <Canvas /> */}
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
    }
}

export default connect(mapStateToProps)(Img);
