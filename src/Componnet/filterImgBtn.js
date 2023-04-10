import React from "react";
import '../static/css/main.css';
import { connect } from "react-redux";
import setSettingType from "../Actions/settingDisplay";

class FilterImgBtn extends React.Component {
    constructor(props) {
        super(props);

        this.click1 = this.click1.bind(this);
        this.click2 = this.click2.bind(this);
        this.click3 = this.click3.bind(this);
    }

    click1() {
        this.props.dispatch(setSettingType("filter_setting"))
    }

    click2() {
        this.props.dispatch(setSettingType("rotate_setting"))
    }

    click3() {
        this.props.dispatch(setSettingType("text_setting"))
    }

    render() {
        return (
            <div className="buttons">
                <button onClick={this.click1} className="button"> Filter Image </button>
                <button onClick={this.click2} className="button"> Rotate </button>
                <button onClick={this.click3} className="button"> Text </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { panelDisplay: state.panelDisplay }
}

export default connect(mapStateToProps)(FilterImgBtn);
