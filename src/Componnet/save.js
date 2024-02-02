// save.js

import React from "react";
import { connect } from 'react-redux';

class Save extends React.Component {
    constructor(props) {
        super(props);

        this.aRef = React.createRef()

        this.click = this.click.bind(this)
    };

    click() {
        if (this.props.context) {
            const canvas = this.props.canvas;
            const dataUrl = canvas.toDataURL('image/png');

            this.aRef.current.href = dataUrl;
            this.aRef.current.click()
        } else {
            console.warning("there is no context")
        }
    };

    render() {
        return (
            <>
                <button
                    onClick={this.click}
                    className="custom-button btn btn-success force-bottom"
                >
                    Save As
                </button>
                <a target="_blank" download="FILENAME.png"
                    ref={this.aRef}
                    style={{ display: "none" }}
                />
            </>
        )
    };
}

function mapStateToProps(state) {
    return {
        Img: state.Img,
        canvas: state.canvas,
        context: state.context,
    }
}

export default connect(mapStateToProps)(Save);
