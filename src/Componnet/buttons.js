// buttons.js

import React from "react";
import '../static/css/main.css';
import FilterImgBtn from "./filterImgBtn";
//import rotateImg from "./rotalAngleImg"
//import textSettings from "./textSettings"
//import InputText from "../Componnet/textSettings"

class Buttons extends React.Component {
  render() {
    return (
      <div className="Buttons">
        <FilterImgBtn />
      </div>
    )
  }
}

export default Buttons;
