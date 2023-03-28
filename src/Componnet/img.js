// img.js

import React from "react";
import { connect } from 'react-redux';
import '../static/css/main.css';

class Img extends React.Component {
    constructor(props) {
        super(props);

        this.myCanvas = React.createRef();

        this.state = {
            imgWidth: '',
            imgHeight: '',
        }

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

        this.setState({
            "imgWidth": image.width,
            "imgHeight": image.height,
        });
        console.log('state width: ', this.state.imgWidth, 'state height: ', this.state.imgHeight);

        image.onload = () => {
            ctx.drawImage(image, 0, 0, this.state.imgWidth / 10, this.state.imgHeight / 10);
        };
    }

    render() {
        console.log('body width: ', this.props.bodyWidth, 'body height: ', this.props.bodyHeight);
        console.log('state width: ', this.state.imgWidth, 'state height: ', this.state.imgHeight);

        return (
            <canvas
                ref={this.myCanvas}
                width={this.state.imgWidth}
                height={this.state.imgHeight}
                className="imgCanvas" />
        )
    }
}

function mapStateToProps(state) {
    return {
        Image_src: state.Image_src,
        bodyWidth: state.bodyWidth,
        bodyHeight: state.bodyHeight,
    }
}

export default connect(mapStateToProps)(Img);
