import React from "react";
import Settings from "./settings";
import Img from "./img";
import './static/css/main.css';

class Body extends React.Component {
    render() {
        return (
            <div className="Body">
                <Img />
                <Settings />
            </div>
        )
    }
}

export default Body;
