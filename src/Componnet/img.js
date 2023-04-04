// img.js

import React from "react";
import { connect } from 'react-redux';
import imgSize from "../Actions/imgSize";
import '../static/css/main.css';

class Img extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            zoom: this.props.zoomUseValue,
        }

        this.canvasRef = React.createRef();
        this.imgRef = React.createRef();

        this.onloadImg = this.onloadImg.bind(this);
    }

    onloadImg() {
        const defaultWidth = this.imgRef.current.width,
            defaultHeight = this.imgRef.current.height;


        var zoom = this.props.zoomUseValue,

            image = new Image();


        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext("2d");

        this.props.dispatch(imgSize(defaultWidth, defaultHeight));

        image.src = this.imgRef.current.src;
        var w = this.props.imgWidth
        var h = this.props.imgHeight
        console.log(w, h)
        image.onload = function () {
            ctx.drawImage(image, 0, 0, w, h)
        }
        console.log(this.canvasRef.current.width)
    }

    render() {
        return (
            <div>
                <img
                    ref={this.imgRef}
                    src={this.props.Image_src}
                    onLoad={this.onloadImg}
                    style={{ display: "none" }}
                    img-load={this.props.imgLoad} />
                <canvas
                    ref={this.canvasRef}
                    width={this.props.imgWidth}
                    height={this.props.imgHeight}
                    className="imgCanvas" />
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
        zoomUseValue: state.zoomUseValue,
        imgLoad: state.imgLoad,
    }
}

export default connect(mapStateToProps)(Img);
