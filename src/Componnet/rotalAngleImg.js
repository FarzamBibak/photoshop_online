// rotalAngleImg.js

import React from "react";
import RotateSettings from "../Actions/rotalAngle";
import '../static/css/settingsPanel.css';
import SettingComponnet from "./SettingComponnet";
import { connect } from "react-redux";

class RotateImg extends SettingComponnet {
    constructor(props) {
        super(props)
        this.rotate = React.createRef();

        this.state = {
            "fields": [
                {
                    "name": "rotate",
                    "ref": this.rotate,
                    "properties": { type: "number" },
                    "id": "rotate-id"
                },
            ],
            "component_name": "rotate_setting"
        }

        this.Click = this.Click.bind(this);
    };

    Click() {
        if (this.props.context) {
            var rotate = this.rotate.current.value;

            this.props.dispatch(RotateSettings(rotate))
        } else {
            console.warning("there is no context")
        }
    };
};

function mapDispatchToProps(state) {
    return {
        settingType: state.settingType,
        panelDisplay: state.panelDisplay,
        context: state.context,
        rotateAngle: state.rotateAngle,
    };
};

export default connect(mapDispatchToProps)(RotateImg);
