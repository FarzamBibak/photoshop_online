import React from "react";
import Settings from '../Componnet/settings'
import Img from "../Componnet/img";
import '../static/css/main.css';

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
