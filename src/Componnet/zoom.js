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
        this.setState({
            zoomValue: this.state.zoomValue + 25
        })

        var zoomShow = parseInt(this.inputRef.current.value),
            zoomUse = zoomShow * 0.01,
            imgWidth = this.props.imgWidth;

        imgWidth = parseInt(imgWidth) * parseInt(zoomUse)
        console.log(zoomUse)
        this.props.dispatch(zoomValue(zoomShow, zoomUse, imgWidth));
    }

    zoomDecrease() {
        this.setState({
            zoomValue: this.state.zoomValue - 25
        })

        var zoomShow = parseInt(this.inputRef.current.value),
            zoomUse = zoomShow * 0.01,
            imgWidth = this.props.imgWidth;

        imgWidth = parseInt(imgWidth) * parseInt(zoomUse)
        console.log(zoomUse)
        this.props.dispatch(zoomValue(zoomShow, zoomUse, imgWidth));
    }

    changeValue() {
        var zoomShow = parseInt(this.inputRef.current.value),
            zoomUse = zoomShow * 0.01,
            imgWidth = this.props.imgWidth;

        console.log(zoomUse)

        this.setState({
            zoomValue: zoomShow
        })

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
        imgWidth: state.imgWidth,
    }
}

export default connect(mapStateToProps)(Zoom);
