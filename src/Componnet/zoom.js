// zoom.js

import React from "react";
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
        var zoomShow = parseFloat(this.inputRef.current.value) + 12.5,
            zoomUse = zoomShow * 0.01;

        this.setState({
            zoomValue: zoomShow
        })

        this.props.dispatch(zoomValue(zoomShow, zoomUse));
    }

    zoomDecrease() {
        var zoomShow = parseFloat(this.inputRef.current.value) - 12.5,
            zoomUse;

        if (zoomShow > 0) {
            zoomUse = zoomShow * 0.01

            this.setState({
                zoomValue: zoomShow
            })

            this.props.dispatch(zoomValue(zoomShow, zoomUse));
        } else {
            zoomShow = zoomShow + 12.5
        }
    }

    changeValue() {
        var zoomShow = parseFloat(this.inputRef.current.value),
            zoomUse = zoomShow * 0.01;

        this.setState({
            zoomValue: zoomShow
        });

        this.props.dispatch(zoomValue(zoomShow, zoomUse));
    }

    render() {
        return (
            <div className="zoomOptions d-flex">
                <button
                    onClick={this.zoomIncrease}
                    className="btn btn-light">
                    +
                </button>

                <input
                    type="number"
                    className="zoomInput"
                    ref={this.inputRef}
                    value={this.state.zoomValue}
                    onChange={this.changeValue}
                    min="1"
                    step="5" />

                <button
                    onClick={this.zoomDecrease}
                    className="btn btn-light">
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
        canvasStyleWidth: state.canvasStyleWidth,
        canvasStyleHeight: state.canvasStyleHeight,
        context: state.context,
        imgWidth: state.imgWidth,
        imgHeight: state.imgHeight,
    }
}

export default connect(mapStateToProps)(Zoom);
