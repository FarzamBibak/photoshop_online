// textSettings.js

import React from "react";
import SettingComponnet from "./SettingComponnet";
import displayPanel from "../Actions/displayPanel";
import { connect } from "react-redux";

class TextSettings extends SettingComponnet {
    constructor(props) {
        super(props);

        this.text = React.createRef();
        this.x = React.createRef();
        this.y = React.createRef();
        this.font_size = React.createRef();

        this.state = {
            "fields": [
                {
                    "name": "text",
                    "ref": this.text,
                    "properties": { type: "text" }
                },
                {
                    "name": "xposition x",
                    "ref": this.x,
                    "properties": { type: "number" }
                },
                {
                    "name": "position y",
                    "ref": this.y,
                    "properties": { type: "number" }
                },
                {
                    "name": "font size",
                    "ref": this.font_size,
                    "properties": { type: "number" }
                },
            ],
            "component_name": "text_setting"
        };

        this.Click = this.Click.bind(this);
        this.clickClose = this.clickClose.bind(this)
    };

    Click() {
        if (this.props.context) {
            const text = this.text.current.value,
                x = this.x.current.value,
                y = this.y.current.value,
                fontSize = this.font_size.current.value;
            this.props.ctx.fillText(text, x, y, fontSize);
        }
    };

    clickClose() {
        const display = "none";

        this.props.dispatch(displayPanel(display))
    }
};

function mapStateToProps(state) {
    return {
        settingType: state.settingType,
        ctx: state.ctx,
        panelDisplay: state.panelDisplay,
        context: state.context,
    }
};

export default connect(mapStateToProps)(TextSettings);
