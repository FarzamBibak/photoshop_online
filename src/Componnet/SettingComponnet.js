// SettingComponent.js

import React from "react";
import '../static/css/settingsPanel.css';

class SettingComponnet extends React.Component {
  render() {
    var list = []
    for (let i = 0; i < this.state.fields.length; i++) {
      list.push(
        <div className="information">
          <h3>{this.state.fields[i].name}:</h3>
          <input type="text" className="input" ref={this.state.fields[i].ref} />
        </div>
      )
    }
    if (this.props.settingType == this.state.component_name) {
      return (
        <div className="panel" style={{display: this.props.panelDisplay}}>
          {list}
          <div className="buttons">
            <button className="doneButton" onClick={this.Click}  > Done </button>
            <button className="closeButton" onClick={this.clickClose}> Close </button>
          </div>
        </div>
      )
    } else {
      return
    }
  }
}

export default SettingComponnet;