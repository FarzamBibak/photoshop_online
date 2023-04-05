import React, { Component,useRef} from "react";
import filterImageSettings from "../Actions/filterImageSet";
import srcChanger from "../Actions/srcChanger";
import '../static/css/settingsPanel.css';


class SettingComponnet extends React.Component {
   constructor(props)  {
       super(props)

   }
  render(){
        var l = []
        for (let i =0;i<this.state.fields.length; i++){
            l.push(
                <div className="information">
                  <label>{ this.state.fields[i].name }:</label>
                  <input type="text" className="input" ref={this.state.fields[i].ref} />
                 </div>
        
            )
        
      }

      if (this.props.settingType == this.state.component_name){
      return (

        <div>
       
        {l}


       
      <div className="buttons">
       <button className="doneButton" onClick={this.Click}  > تایید </button>
       <button className="closeButton"> لغو </button>
       </div>
      
       </div>

       )
      }else{
        return  
      }

    }

  }


export default (SettingComponnet)
