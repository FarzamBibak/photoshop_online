import React from "react";


function ColorCard(color , handleUtensil , utensil){ 
       
    function handleUtensil(updateItem){
        const newUtensil={...utensil}
        newUtensil.color = updateItem;
        console.log(newUtensil)
    }

    return(
        <div style={{backgroundColor:color.color}} onClick={handleUtensil(color , "color")} 
        className="color-icon" ></div>
    )
}

export default ColorCard;