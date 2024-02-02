// textSettings.js

import React from "react";
import SettingComponnet from "./SettingComponnet";
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
                    "properties": { type: "text" },
                    "id": "text-id"
                },
                {
                    "name": "xposition x",
                    "ref": this.x,
                    "properties": { type: "number" },
                    "id": "xposition-x-id"
                },
                {
                    "name": "position y",
                    "ref": this.y,
                    "properties": { type: "number" },
                    "id": "yposition-y-id"
                },
                {
                    "name": "font size",
                    "ref": this.font_size,
                    "properties": { type: "number" },
                    "id": "font-size-id"
                },
            ],
            "component_name": "text_setting"
        };

        this.Click = this.Click.bind(this);
    };

    Click() {
        if (this.props.context) {
            var text = this.text.current.value,
                x = this.x.current.value,
                y = this.y.current.value,
                fontSize = this.font_size.current.value;
            this.props.ctx.fillText(text, x, y, fontSize);
        }
    };
};

function mapStateToProps(state) {
    return {
        settingType: state.settingType,
        panelDisplay: state.panelDisplay,
        context: state.context,
        ctx: state.ctx,
    }
};

export default connect(mapStateToProps)(TextSettings);
