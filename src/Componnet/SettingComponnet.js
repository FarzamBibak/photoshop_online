// SettingComponent.js

import React from "react";
import displayPanel from "../Actions/displayPanel";

class SettingComponnet extends React.Component {
  constructor(props) {
    super(props);

    this.clickClose = this.clickClose.bind(this)
  }
  clickClose() {
    this.props.dispatch(displayPanel("none"))
  };

  render() {
    var list = []
    for (let i = 0; i < this.state.fields.length; i++) {
      list.push(
        <>
          <div className="form-group row">
            <label for={this.state.fields[i].id} className="col col-form-label text-end">
              <strong>{this.state.fields[i].name} : </strong>
            </label>
            <div className="col">
              <input id={this.state.fields[i].id} {... this.state.fields[i].properties} className="form-control" ref={this.state.fields[i].ref} placeholder={this.state.fields[i].name} />
            </div>
          </div>
          <br></br>
        </>
      )
    }

    if (this.props.settingType == this.state.component_name) {
      return (
        <form>
          <div className="container panel" style={{ display: this.props.panelDisplay }}>
            {list}
            <div className="d-flex justify-content-around">
              <button className="btn btn-primary col-6 custom-margin" type="button" onClick={this.Click}> Done </button>
              <button className="btn btn-danger col-6 custom-margin" type="button" onClick={this.clickClose}> Close </button>
            </div>
          </div>
        </form>
      )
    } else {
      return
    }
  }
}

export default SettingComponnet;