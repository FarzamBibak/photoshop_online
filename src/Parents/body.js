// body.js

import React from "react";
import Img from "../Componnet/img";
import Zoom from "../Componnet/zoom";
import bodySize from '../Actions/bodySize';
import { connect } from 'react-redux';
import Settings from "../Componnet/settings";
import srcChanger from "../Actions/srcChanger";

class Body extends React.Component {
    constructor(props) {
        super(props);

        this.bodyRef = React.createRef();
        this.inputRef = React.createRef();

        this.componentDidMount = this.componentDidMount.bind(this);
        this.drop = this.drop.bind(this);
        this.dragOver = this.dragOver.bind(this);
    };

    drop(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        const fileInput = this.inputRef.current,
            dT = new DataTransfer();

        dT.items.add
            (
                ev.dataTransfer.files[0]
            );
        fileInput.files = dT.files;

        const file = fileInput.files[0],
            reader = new FileReader();

        reader.onloadend = () => {
            const base64String = reader.result;

            this.props.dispatch
                (
                    srcChanger(base64String)
                )
        };

        reader.readAsDataURL(file);
    };

    dragOver(ev) {
        ev.preventDefault();
    };

    componentDidMount() {
        const body = this.bodyRef,

            width = body.current.clientWidth,
            height = body.current.clientHeight;

        this.props.dispatch(bodySize(width, height))
    };

    render() {
        return (
            <div ref={this.bodyRef} className="Body" onDrop={this.drop} onDragOver={this.dragOver}>
                <Img />
                <Settings />
                <Zoom />
                <input ref={this.inputRef} type="file" style={{ display: "none" }} />
            </div>
        )
    };
};

function mapStateToProps(state) {
    return state;
};

export default connect(mapStateToProps)(Body);
