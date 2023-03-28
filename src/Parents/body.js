// body.js

import React from "react";
import Settings from '../Componnet/settings';
import Img from "../Componnet/img";
import size from '../Actions/bodySize';
import { connect } from 'react-redux';
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

        this.props.dispatch(size(width, height))
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
