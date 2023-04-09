// img.js

import React from "react";
import { connect } from 'react-redux';
import imgSize from "../Actions/imgSize";
import ctxText from "../Actions/settingCTX";
import '../static/css/main.css';


class Img extends React.Component {
    constructor(props) {
        super(props);

        this.canvasRef = React.createRef();
        this.imgRef = React.createRef();
        this.canvasStyleRef = React.createRef();

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
        console.log(ctx)
        this.props.dispatch(ctxText(ctx))
        image.onload = function () {
        ctx.drawImage(image, 0, 0, image.width, image.height )
        
       // ctx.fillText("t", 100, 50, 14);

        }    
    }

/*
    rotateAngle: '',
    textFont: '',
    textSize: 12,
    textPositionX: '',
    textPositionY: '',
    panelDisplay: 0,
*/
    render() {
        return (
            <div>
            <img ref={this.imgRef} src={this.props.Image_src} onLoad={this.onloadImg} style={{display:"none"}}/>
            <canvas style= {{filter: this.props.canvasStyle.filter , transform:this.props.rotateAngle}}
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
        canvasStyle: state.canvasStyle,
        rotateAngle: state.rotateAngle     
    }
}

export default connect(mapStateToProps)(Img);
