// img.js

import React from "react";
import { connect } from 'react-redux';
import imgSize from "../Actions/imgSize";
import '../static/css/main.css';

class Img extends React.Component {
    constructor(props) {
        super(props);

        this.canvasRef = React.createRef();
        this.imgRef = React.createRef();

        this.onloadImg = this.onloadImg.bind(this)
    }

    onloadImg(){
        var width = this.imgRef.current.width
        var height = this.imgRef.current.height

        this.props.dispatch(imgSize(width, height));
        
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext("2d");

        const image = new Image();
        image.src = this.imgRef.current.src;
        image.onload = function () {
            ctx.drawImage(image, 0, 0, image.width, image.height )
        }    
    }

    render() {
        return (
            <div>
            <img ref={this.imgRef} src={this.props.Image_src} onLoad={this.onloadImg} style={{display:"none"}}/>
            <canvas
                draggable
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
    }
}

export default connect(mapStateToProps)(Img);
