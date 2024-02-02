// paintSettings.js

import React from "react";
import SettingComponnet from "./SettingComponnet";
import paintSet from "../Actions/paintSet";
import { connect } from "react-redux";


class PaintSettings extends SettingComponnet {
    constructor(props) {
        super(props)

        this.paintColor = React.createRef();
        this.paintWidth = React.createRef();
        this.paintOpacity = React.createRef();

        this.state = {
            "fields": [
                {
                    "name": "Brush Color",
                    "ref": this.paintColor,
                    "properties": { type: "color", onChange: this.changeColor },
                    "id": "brush-color-id"
                },
                {
                    "name": "Brush Width",
                    "ref": this.paintWidth,
                    "properties": { type: "range", min: "3", max: "20", onChange: this.changeWidth },
                    "id": "brush-width-id"
                },
                {
                    "name": "Brush Opacity",
                    "ref": this.paintOpacity,
                    "properties": { type: "range", min: "1", max: "100", onChange: this.changeOpacity },
                    "id": "brush-opacity-id"
                }
            ],
            "component_name": "paint_setting",
            "color": "#000000",
            "width": "10",
            "opacity": "50",
        }

        this.Click = this.Click.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.changeWidth = this.changeWidth.bind(this);
        this.changeOpacity = this.changeOpacity.bind(this);
    }

    changeColor(ev) {
        this.setState({ color: this.paintColor.current.value })
    };

    changeWidth(ev) {
        console.log(this.paintWidth.current)
        this.setState({ width: this.paintWidth.current.value })
    };

    changeOpacity(ev) {
        this.setState({ opacity: this.paintOpacity.current.value })
    };

    Click() {
        if (this.props.context) {
            var width = this.state.width
            var color = this.state.color
            var opacity = this.state.opacity

            this.props.dispatch(paintSet(width, color, opacity))
        }
    };
};

function mapDispatchToProps(state) {
    return {
        settingType: state.settingType,
        panelDisplay: state.panelDisplay,
        context: state.context,
        paintActive: state.paintActive,
        canvasRef: state.canvasRef
    };
};

export default connect(mapDispatchToProps)(PaintSettings);
