import React, { Component } from "react";
import RotateSettings from "../Actions/rotalAngle";
import '../static/css/settingsPanel.css';
import SettingComponnet from "./SettingComponnet";

import { connect } from "react-redux";


 class RotateImg extends SettingComponnet {
    constructor(props){
      super(props)  
      this.rotate= React.createRef();
      this.Click = this.Click.bind(this) 

      

    this.state = {
        "fields" : [
            {
                "name":"rotate",
                "ref":this.rotate
            
            },

        ],

        "component_name" : "rotate_setting"

    }

    }

     Click(){
        const rotate = this.rotate.current.value;
        console.log(rotate)
        console.log(RotateSettings(rotate))
        //this.setState({ rotate: true })
        this.props.dispatch(RotateSettings(rotate))


        console.log("rrrrrrrrrrrrrrrrrrrr")
        console.log(this.props.rotateAngle)

     }

//----------------------------------           
    }  
    
function mapDispatchToProps(state) 
        {
    return {
            settingType:state.settingType,
            rotateAngle:state.rotateAngle
        }
     
        }



    



export default connect(mapDispatchToProps)(RotateImg);  