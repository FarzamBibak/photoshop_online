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
                    "ref": this.text
                },
                {
                    "name": "xposition x",
                    "ref": this.x
                },
                {
                    "name": "position y",
                    "ref": this.y
                },
                {
                    "name": "font size",
                    "ref": this.font_size
                },
            ],
            "component_name": "text_setting"
        };

        this.Click = this.Click.bind(this);
    };

    Click = () => {
        if (this.props.context) {
            const text = this.text.current.value;
            const x = this.x.current.value;
            const y = this.y.current.value;
            const font_siza = this.font_size.current.value;
            this.props.ctx.fillText(text, x, y, font_siza)
        }
    };

    clickClose = () => {
        const display = "none";

        this.props.dispatch(displayPanel(display))
    }
};

function mapDispatchToProps(state) {
    return {
        settingType: state.settingType,
        ctx: state.ctx,
        panelDisplay: state.panelDisplay,
        context: state.context,
    }
};

export default connect(mapDispatchToProps)(TextSettings);
