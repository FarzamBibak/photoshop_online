// rotalAngleImg.js

import React from "react";
import RotateSettings from "../Actions/rotalAngle";
import '../static/css/settingsPanel.css';
import SettingComponnet from "./SettingComponnet";
import displayPanel from "../Actions/displayPanel";
import { connect } from "react-redux";


class RotateImg extends SettingComponnet {
    constructor(props) {
        super(props)
        this.rotate = React.createRef();

        this.state = {
            "fields": [
                {
                    "name": "rotate",
                    "ref": this.rotate
                },
            ],
            "component_name": "rotate_setting"
        }

        this.Click = this.Click.bind(this)
    }

    Click() {
        if (this.props.context) {
            const rotate = this.rotate.current.value;
            this.props.dispatch(RotateSettings(rotate))
        }
    }

    clickClose = () => {
        const display = "none";

        this.props.dispatch(displayPanel(display))
    }
};

function mapDispatchToProps(state) {
    return {
        settingType: state.settingType,
        rotateAngle: state.rotateAngle,
        panelDisplay: state.panelDisplay,
        context: state.context,
    }
};

export default connect(mapDispatchToProps)(RotateImg);
