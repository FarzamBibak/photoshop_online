import React from "react";
import '../static/css/main.css';
import { connect } from "react-redux";
import setSettingType from "../Actions/settingDisplay";

class FilterImgBtn extends React.Component {
    constructor(props) {
        super(props);

        //this.menu= React.createRef;

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
            <div>
                <button onClick={this.click1}>   تصویر فیلتر </button>
                <button onClick={this.click2}> برگردندان تصویر </button>
                <button onClick={this.click3}> تنظیمات متن </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { panelDisplay: state.panelDisplay }
}

export default connect(mapStateToProps)(FilterImgBtn);
