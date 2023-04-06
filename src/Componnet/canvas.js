// canvas.js

import React from "react";
import { connect } from 'react-redux';
import '../static/css/main.css';

class Canvas extends React.Component {
    constructor(props){
        super(props);
        
        this.canvasRef = React.createRef();

    }
    
    render() {
        return (
            <>
                <canvas
                    ref={this.canvasRef}
                    width={this.props.imgWidth}
                    height={this.props.imgHeight}
                    className="imgCanvas" />
            </>
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

        canvasStyleWidth: state.canvasStyleWidth,
        canvasStyleHeight: state.canvasStyleHeight,
    }
}

export default connect(mapStateToProps)(Canvas);
