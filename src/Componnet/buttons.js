// buttons.js

import React from "react";
import { connect } from "react-redux";
import setSettingType from "../Actions/setSettingType";
import Save from "./save.js";

class Buttons extends React.Component {
  constructor(props) {
    super(props);

    this.click1 = this.click1.bind(this);
    this.click2 = this.click2.bind(this);
    this.click3 = this.click3.bind(this);
    this.click4 = this.click4.bind(this);
  };

  click1() {
    this.props.dispatch(setSettingType("filter_setting", "cursor-default"));
  };

  click2() {
    this.props.dispatch(setSettingType("rotate_setting", "cursor-rotate"));
  };

  click3() {
    this.props.dispatch(setSettingType("text_setting", "cursor-text"));
  };

  click4() {
    this.props.dispatch(setSettingType("paint_setting", "cursor-default"));
  };

  render() {
    return (
      <div className="d-flex flex-column">
        <button onClick={this.click1} className="custom-button btn btn-primary"> Filter Image </button>
        <button onClick={this.click2} className="custom-button btn btn-primary"> Rotate </button>
        <button onClick={this.click3} className="custom-button btn btn-primary"> Text </button>
        <button onClick={this.click4} className="custom-button btn btn-primary"> Paint </button>

        <Save />
      </div>
    )
  };
};

function mapStateToProps(state) {
  return {
    panelDisplay: state.panelDisplay
  };
};

export default connect(mapStateToProps)(Buttons);
