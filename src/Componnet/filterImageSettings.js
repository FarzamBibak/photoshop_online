import React from "react";
import filterImageSettings from "../Actions/filterImageSet";
import '../static/css/settingsPanel.css';
import SettingComponnet from "./SettingComponnet"
import { connect } from "react-redux";
import displayPanel from "../Actions/displayPanel";

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
                    "ref": this.grayscale
                },
                {
                    "name": "sepia",
                    "ref": this.sepia
                },
                {
                    "name": "blur",
                    "ref": this.blur
                },
                {
                    "name": "brightness",
                    "ref": this.brightness
                },
                {
                    "name": "contrast",
                    "ref": this.contrast
                },
            ],
            "component_name": "filter_setting"
        }

        this.Click = this.Click.bind(this);
    };

    Click = () => {
        if (this.props.context) {
            const grayscale = this.grayscale.current.value;
            const sepia = this.sepia.current.value;
            const blur = this.blur.current.value;
            const brightness = this.brightness.current.value;
            const contrast = this.contrast.current.value;
            this.props.dispatch(filterImageSettings(grayscale, sepia, blur, brightness, contrast));
            console.log("here");
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
        panelDisplay: state.panelDisplay,
        context: state.context,
    }
};

export default connect(mapDispatchToProps)(FilterImage);
