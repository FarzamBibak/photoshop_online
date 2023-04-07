import React, { useState } from "react";

function Container() {

    const [utensil, setUtensil] = useState({
        tool:"brush",
        weight:"size",
        color:"black",
    })

    const { tool, weight , color} = utensil;

    const [magic , SetMagic] = useState({
        width:"100%",
        height:"600px",
        backgroundColor:'lightblue',
        border:"5px solid rgb(207,207,207)",
        borderStyle:"groove"
    })

    const [draw , setDraw] = useState(false)

    function handleBucket(){
        if(tool === "bucket"){
            const newItem = {
                ...magic,
                backgroundColor: color
            }
            SetMagic(newItem)
        }
    }


    function handleMouseDown(event){if(tool == "brush"){
        if(tool === "brush" && draw === true){
            console.log(event.screenX , event.screenY)
    }
}  
    
    return (
        <div style={magic} onMouseDown={()=>setDraw(true)} onMouseUp={()=>setDraw(false)}
        onClick={handleBucket} onMouseMove={(event)=>handleMouseDown(event)}></div>
    )
}
}

export default Container