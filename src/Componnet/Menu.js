import React, { useState } from "react";
import Items from "./Actions/Tools";
import Brush from "../Actions/Brush"
import ColorContainer from "../Actions/ColorsContainer";
import './Menu.css'


function Tools() {

    const [utensil, setUtensil] = useState({
        tool:"brush",
        weight:"size",
        color:"black",
    })

    function handleUtensil(updateItem){
        const newUtensil={...utensil}
        newUtensil.tool = updateItem;
        console.log(newUtensil)
    }

    return(
        <div id="Menu">
        <Items handleUtensil={handleUtensil}/>
        <Brush handleUtensil={handleUtensil}/>
        <ColorContainer utensil={utensil}/>
        </div>
    )
}

export default Tools;