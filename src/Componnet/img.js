// img.js

import React from "react";
import { connect } from 'react-redux';
import imgSize from "../../Actions/imgSize";
import '../static/css/main.css';

class Img extends React.Component {
    constructor(props) {
        super(props);

        this.myCanvas = React.createRef();

        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateCanvas = this.updateCanvas.bind(this)
    }

    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        const canvas = this.myCanvas.current;
        const ctx = canvas.getContext("2d");

        const image = new Image();
        image.src =
            this.props.Image_src;

        var width = image.width * 2;
        var height = image.height * 2;

        this.props.dispatch(imgSize(width, height));

        image.onload = function () {
            ctx.drawImage(image, 0, 0, image.width * 2, image.height * 2)
        }
    }

    render() {
        return (
            <canvas
                ref={this.myCanvas}
                width={this.props.imgWidth}
                height={this.props.imgHeight}
                className="imgCanvas" />
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
