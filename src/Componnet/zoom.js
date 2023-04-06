// zoom.js

import React from "react";
import '../static/css/main.css'
import { connect } from 'react-redux';
import zoomValue from "../Actions/zoomValue";

class Zoom extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();

        this.state = {
            zoomValue: 100,
        }

        this.zoomIncrease = this.zoomIncrease.bind(this);
        this.zoomDecrease = this.zoomDecrease.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    zoomIncrease() {
        var zoomShow = parseFloat(this.inputRef.current.value) + 25,
            zoomUse = zoomShow * 0.01;

        this.setState({
            zoomValue: zoomShow
        })

        console.log(zoomUse);

        this.props.dispatch(zoomValue(zoomShow, zoomUse));
    }

    zoomDecrease() {
        var zoomShow = parseFloat(this.inputRef.current.value) - 25,
            zoomUse = zoomShow * 0.01;

        this.setState({
            zoomValue: zoomShow
        })

        console.log(zoomUse);

        this.props.dispatch(zoomValue(zoomShow, zoomUse));
    }

    changeValue() {
        var zoomShow = parseFloat(this.inputRef.current.value),
            zoomUse = zoomShow * 0.01;

        this.setState({
            zoomValue: zoomShow
        });

        console.log(zoomUse);

        this.props.dispatch(zoomValue(zoomShow, zoomUse));
    }

    render() {
        return (
            <div className="zoomOptions">
                <button
                    onClick={this.zoomIncrease}>
                    +
                </button>

                <input
                    type="number"
                    className="zoomInput"
                    ref={this.inputRef}
                    value={this.state.zoomValue}
                    onChange={this.changeValue}
                    min="0"
                    step="5" />

                <button
                    onClick={this.zoomDecrease}>
                    -
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        zoomShowValue: state.zoomShowValue,
        zoomUseValue: state.zoomUseValue,
        canvas: state.canvas,
        canvasWidth: state.canvasWidth,
        canvasHeight: state.canvasHeight,
        context: state.context,
        imgWidth: state.imgWidth,
        imgHeight: state.imgHeight,
    }
}

export default connect(mapStateToProps)(Zoom);
