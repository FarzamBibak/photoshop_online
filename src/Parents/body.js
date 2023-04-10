// body.js

import React from "react";
import Img from "../Componnet/img";
import bodySize from '../Actions/bodySize';
import { connect } from 'react-redux';
import '../static/css/main.css';
import Menu from "../Componnet/Menu";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.body = React.createRef();

        this.componentDidMount = this.componentDidMount.bind(this)
    }
    
    componentDidMount() {
        const body = this.body
        let height = body.current.clientHeight
        let width = body.current.clientWidth

        this.props.dispatch(bodySize(width, height))
    }

    render(isShown) {

        return (
            <div ref={this.body} className="Body">
                {isShown && <Img />}
                {/* <Img />  */}
                {isShown && <Menu
                    setLineColor={this.setLineColor}
                    setLineWidth={this.setLineWidth}
                    setLineOpacity={this.setLineOpacity}
                />}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        bodyWidth: state.bodyWidth,
        bodyHeight: state.bodyHeight,
    }
}

export default connect(mapStateToProps)(Body);
