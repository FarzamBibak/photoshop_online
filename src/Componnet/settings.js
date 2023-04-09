// settings.js

import React from "react";
import '../static/css/main.css';
import FilterImage from "./filterImageSettings"
import RotateImg from "./rotalAngleImg"
import TextSettings from "./textSettings"

class Settings extends React.Component {
    render() {
        return (
            <div className="Settings">
              <FilterImage />
              <RotateImg />
              <TextSettings/>
            </div>
        )
    }
}

export default Settings;
