import React, { useState } from "react";

function Container() {

    const [utensil, setUtensil] = useState({
        tool:"brush",
        weight:"size",
        color:"black",
    })

     
    const [magic , SetMagic] = useState({
        width:"790px",
        height:"600px",
        backgroundColor:'lightblue',
        border:"5px solid rgb(207,207,207)",
        borderStyle:"groove"
    })
    
    
    const { tool, weight , color} = utensil;
    
    
    function handleMouseDown(event){
        if(tool === "bucket"){
            const newItem = {
                ...magic,
                backgroundColor: color
            }
            SetMagic(newItem)
        } else if(tool === "brush"){
            console.log(event.screenX , event.screenY)
        }

    }
  

    function handleBucket(){
        if(tool === "bucket"){
            const newItem = {
                ...magic,
                backgroundColor: color
            }
            console.log(newItem)
        }
    }





    
    return (
        <div id=""
        style={magic} 
        onMouseMove={(event)=>handleMouseDown(event)}
        // onMouseDown={()=>setDraw(true)} 
        // onMouseUp={()=>setDraw(false)}
        // onClick={handleBucket} 
        // onMouseMove={(event)=>handleMouseDown(event)}
        ></div>
    )
    }


export default Container