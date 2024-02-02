import React from "react";
import filterImageSettings from "../Actions/filterImageSet";
import '../static/css/settingsPanel.css';
import SettingComponnet from "./SettingComponnet"
import { connect } from "react-redux";

class FilterImage extends SettingComponnet {
    constructor(props) {
        super(props);

        this.grayscale = React.createRef();
        this.sepia = React.createRef();
        this.blur = React.createRef();
        this.brightness = React.createRef();
        this.contrast = React.createRef();

        this.state = {
            "fields": [
                {
                    "name": "grayscale",
                    "ref": this.grayscale,
                    "properties": { type: "number" },
                    "id": "grayscale-id"
                },
                {
                    "name": "sepia",
                    "ref": this.sepia,
                    "properties": { type: "number" },
                    "id": "sepia-id"
                },
                {
                    "name": "blur",
                    "ref": this.blur,
                    "properties": { type: "number" },
                    "id": "blur-id"
                },
                {
                    "name": "brightness",
                    "ref": this.brightness,
                    "properties": { type: "number" },
                    "id": "brightness-id"
                },
                {
                    "name": "contrast",
                    "ref": this.contrast,
                    "properties": { type: "number" },
                    "id": "contrast-id"
                },
            ],
            "component_name": "filter_setting"
        }

        this.Click = this.Click.bind(this);
    };

    Click() {
        if (this.props.context) {
            var grayscale = this.grayscale.current.value,
                sepia = this.sepia.current.value,
                blur = this.blur.current.value,
                brightness = this.brightness.current.value,
                contrast = this.contrast.current.value;

            this.props.dispatch(filterImageSettings(grayscale, sepia, blur, brightness, contrast));
        }
    };
};

function mapDispatchToProps(state) {
    return {
        settingType: state.settingType,
        panelDisplay: state.panelDisplay,
        context: state.context,
    }
};

export default connect(mapDispatchToProps)(FilterImage);
