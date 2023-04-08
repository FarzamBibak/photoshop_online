// settings.js

import React , { useState } from "react";
import ToolType from "./settings/ToolType";
import BrushSize from "./settings/BrushSize"
import ColorContainer from "./settings/ColorsContainer";
import '../static/css/main.css';



function Settings(){

    const [utensil, setUtensil] = useState({
        tool:"brush",
        weight:"size1",
        color:"color"
    })

    function handleUtensil(updateItem){
        const newUtensil={...utensil}
        newUtensil.tool = updateItem;
        console.log(newUtensil)
    }

    return(
            <div className="Settings">
        <ToolType handleUtensil={handleUtensil}/>
        <BrushSize handleUtensil={handleUtensil}/>
        <ColorContainer utensil={utensil}/>
            </div>
    )
}

export default Settings;
