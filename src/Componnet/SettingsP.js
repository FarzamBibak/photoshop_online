// settings.js

import React , { useState } from "react";
import ToolType from "./settings/ToolType";
import BrushSize from "./settings/BrushSize"
import ColorContainer from "./settings/ColorsContainer";
import '../static/css/main.css';



function Settings(){


    function handleUtensil(updateItem){
        const newUtensil={...utensil}
        newUtensil.tool = updateItem;
        console.log(newUtensil)
    }

    return(
            <div className="Settings">
        <ToolType/>
        <BrushSize/>
        <ColorContainer/>
            </div>
    )
}

export default Settings;
