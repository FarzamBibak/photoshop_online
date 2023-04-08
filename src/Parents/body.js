// body.js

import React from "react";
import Img from "../Componnet/img";
import bodySize from '../Actions/bodySize';
import { connect } from 'react-redux';
import Settings from '../Componnet/SettingsP';
import '../static/css/main.css';

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

    render() {

        return (
            <div ref={this.body} className="Body">
                <Img />
                <Settings />
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
