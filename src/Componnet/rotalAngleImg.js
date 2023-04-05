import React, { Component } from "react";
import rotateAngle from "../Actions/rotalAngle";
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
        this.props.dispatch(rotateAngle(rotate))

        console.log("hereeeeeeeeeee")

     }


//----------------------------------


      
            
     
    }  
    
    
 

function mapStateToProps(state) 
        {
    return { img_Local: state.img_Scr,
        settingType:state.settingType }
     
        }




    



export default connect(mapStateToProps)(RotateImg);