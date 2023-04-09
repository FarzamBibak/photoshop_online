// SettingComponent.js

import React, { Component, useRef } from "react";
import filterImageSettings from "../Actions/filterImageSet";
import srcChanger from "../Actions/srcChanger";
import '../static/css/settingsPanel.css';

class SettingComponnet extends React.Component {
  constructor(props) {
    super(props);

  };

  render() {
    var list = []
    for (let i = 0; i < this.state.fields.length; i++) {
      list.push(
        <div className="information">
          <label className="lable">{this.state.fields[i].name}:</label>
          <input type="text" className="input" ref={this.state.fields[i].ref} />
        </div>
      )
    }
    if (this.props.settingType == this.state.component_name) {
      return (
        <div>
          {list}
          <div className="buttons">
            <button className="doneButton" onClick={this.Click}  > Done </button>
            <button className="closeButton"> Close </button>
          </div>
        </div>
      )
    } else {
      return
    }
  }
}

export default SettingComponnet;