// paintSettings.js

import React from "react";
import RotateSettings from "../Actions/rotalAngle";
import '../static/css/settingsPanel.css';
import SettingComponnet from "./SettingComponnet";
import displayPanel from "../Actions/displayPanel";
import paintSet from "../Actions/paintSet";
import paintColor from "../Actions/paintColor";
import paintOpacity from "../Actions/paintOpacity";
import paintWidth from "../Actions/paintWidth";
import { connect } from "react-redux";


class PaintSettings extends SettingComponnet {
    constructor(props) {
        super(props)
        this.paintBrush = React.createRef();
        this.paintWidth = React.createRef();
        this.paintOpacity = React.createRef();

        this.state = {
            "fields": [
                {
                    "name": "Brush Color",
                    "ref": this.paintBrush,
                    "properties": { type: "color", onChange: this.changeColor }
                },
                {
                    "name": "Brush Width",
                    "ref": this.paintWidth,
                    "properties": { type: "range", min: "3", max: "20", onChange: this.changeWidth }
                },
                {
                    "name": "Brush Opacity",
                    "ref": this.paintOpacity,
                    "properties": { type: "range", mi: "1", max: "100", onChange: this.changeOpacity }
                }
            ],
            "component_name": "paint_setting"
        }

        this.Click = this.Click.bind(this);
        this.clickClose = this.clickClose.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.changeWidth = this.changeWidth.bind(this);
        this.changeOpacity = this.changeOpacity.bind(this);
    }

    changeColor(ev) {
        console.log("aaaaaaaaa")

        this.props.dispatch(paintColor(ev))
    };

    changeWidth(ev) {
        console.log("aaaabbbbbbbbbbaaaaa", this)

        this.props.dispatch(paintWidth(ev))
    };

    changeOpacity(ev) {
        console.log("aaaabbbbbbccccccccccbbbbaaaaa")

        this.props.dispatch(paintOpacity(ev))
    };

    Click() {
        if (this.props.context) {
            const rotate = this.rotate.current.value;

            this.props.dispatch(RotateSettings(rotate))
        }
    };

    clickClose() {
        const display = "none";

        this.props.dispatch(displayPanel(display))
    };
};

function mapDispatchToProps(state) {
    return {
        settingType: state.settingType,
        panelDisplay: state.panelDisplay,
        context: state.context,
    };
};

export default connect(mapDispatchToProps)(PaintSettings);
