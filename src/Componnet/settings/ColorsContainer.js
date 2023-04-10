import React from "react";


function ColorContainer(setLineColor) {
    return(
        <>
            <input
                type="color"
                onChange={(e) => {setLineColor(e.target.value);
            }}/>
        </>
    )
}

export default ColorContainer;