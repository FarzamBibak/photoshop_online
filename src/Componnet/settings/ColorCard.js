import React from "react";


function ColorCard(color , handleUtensil , utensil){ 
       
    function handleUtensil(updateItem){
        const newUtensil={...utensil}
        newUtensil.tool = updateItem;
        console.log(newUtensil)
    }

    return(
        <div onClick={handleUtensil(color , "color")} className="color-icon" 
        style={{backgroundColor:color}}></div>
    )
}

export default ColorCard;