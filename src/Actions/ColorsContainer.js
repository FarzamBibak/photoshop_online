import React from "react";

const colorList = ["#FFFFFF","#000000","#808080","#C0C0C0"];
const colorList2 = ["#0000FF","#FF0000","#00FF00","#FFFF00"];

const colorGrid = colorList.map((color) => {
    console.log({color})
    return(
        <div id="colors1">
           <div onClick={()=>console.log({color})} style={{width:'20px',height:'20px',backgroundColor:color,margin:'0px',float:'left',borderStyle:'inset'}}></div> 
        </div>
    )
}) 

const colorGrid2 = colorList2.map((color) => {
    console.log({color})
    return(
        <div id="colors2">
           <div onClick={()=>console.log({color})} style={{width:'20px',height:'20px',backgroundColor:color,margin:'0px',float:'left',borderStyle:'inset'}}></div> 
        </div>
    )
}) 


function ColorContainer({utensil}) {
    return (
        <div id="color-grid">
            {colorGrid}
            <br></br>
            <br></br>
            {colorGrid2}
        </div>
    )
}

export default ColorContainer;




// tool={
//   brush:thin,
//   type:brush,
//   color:red,
//}

