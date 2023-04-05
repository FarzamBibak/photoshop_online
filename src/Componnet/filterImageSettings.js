import React, { Component,useRef} from "react";
import filterImageSettings from "../Actions/filterImageSet";
import srcChanger from "../Actions/srcChanger";
import '../static/css/settingsPanel.css';
import SettingComponnet from "./SettingComponnet"




//import Body from "../Parents/body";

import { connect } from "react-redux";


 class FilterImage extends SettingComponnet {
   
    constructor(props) {
        super(props)

       this.grayscale = React.createRef();
       this.sepia = React.createRef();
       this.blur = React.createRef();
       this.brightness = React.createRef();
       this.contrast = React.createRef();

       this.state = {
            "fields" : [
                {
                    "name":"grayscale",
                    "ref":this.grayscale
                },
                {
                    "name": "sepia",
                    "ref": this.sepia
                },

                {
                   "name": "blur" ,
                    "ref" : this.blur
                },

                {
                    "name": "brightness",
                    "ref": this.brightness
                },
                 
                {
                    "name": "contrast",
                    "ref":this.contrast
                },


            ],
            "component_name" : "filter_setting"
       }
       

        this.Click = this.Click.bind(this)
    }
       Click = () =>{
            const grayscale = this.grayscale.current.value;
            const sepia = this.sepia.current.value;
            const blur = this.blur.current.value;
            const brightness = this.brightness.current.value;
            const contrast = this.contrast.current.value;
            this.props.dispatch(filterImageSettings(grayscale,sepia,blur,brightness,contrast))
            console.log("here")
    }
 
}








  function mapDispatchToProps(state) {
   return{ img_Local: state.img_Scr,
    settingType:state.settingType
           }

  }

   



export default connect(mapDispatchToProps)(FilterImage);