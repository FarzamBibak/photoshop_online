// settings.js

import React , { useState } from "react";
import Items from "./settings/ToolType";
import Brush from "./settings/BrushSize"
import ColorContainer from "./settings/ColorsContainer";
import '../static/css/main.css';
import Tools from "./settings/ToolType";


function Settings(){

    const [utensil, setUtensil] = useState({
        tool:"brush",
        weight:"size1",
        color:"black",
    })

    function handleUtensil(updateItem){
        const newUtensil={...utensil}
        newUtensil.tool = updateItem;
        console.log(newUtensil)
    }

    return(
            <div className="Settings">
        <Items handleUtensil={handleUtensil}/>
        <Brush handleUtensil={handleUtensil}/>
        <ColorContainer utensil={utensil}/>
            </div>
    )
}

export default Settings;
