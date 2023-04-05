import React, { Component } from "react";
import SettingComponnet from "./SettingComponnet"
 

import { connect } from "react-redux";


 class TextSettings extends SettingComponnet {
    constructor(props) {
        super(props)

       this.text = React.createRef();
       this.x = React.createRef();
       this.y = React.createRef();
       this.font_size = React.createRef();

       this.state = {
            "fields" : [
                {
                    "name":"text",
                    "ref":this.text
                },
                {
                    "x": "x",
                    "ref": this.x
                },

                {
                    "name": "y" ,
                    "ref" : this.y
                },

                {
                    "name": "font size",
                    "ref": this.font_size
                },
                 
              

            ],
            "component_name" : "text_setting"
       }
       

        this.Click = this.Click.bind(this)
    }
       Click = () =>{
            const text = this.text.current.value;
            const x = this.x.current.value;
            const y = this.y.current.value;
            const font_siza = this.font_size.current.value;
            this.props.ctx.fillText(text,x,y,font_siza)
    }
 
}
      

      
   
 

function mapDispatchToProps(state) {
    return{
     settingType:state.settingType,
     ctx:state.ctx
            }
   
        }


export default connect(mapDispatchToProps)(TextSettings);