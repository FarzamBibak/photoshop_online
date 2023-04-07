import React from "react";
import ColorCard from "./ColorCard";

const colorList = ["#FFFFFF","#000000","#808080","#C0C0C0","#0000FF",
"#FF0000","#00FF00","#FFFF00"];


const colorGrid = colorList.map((color) => <ColorCard key={color} 
color={color}/>)


function ColorContainer({utensil}) {


    return(
        <div id="color-grid">
            {colorGrid}
        </div>
    )
}

export default ColorContainer;



















/* class ColorContainer extends React.Component  {


    render(){
    return (
        <div id="color-grid">
            <colorGrid1 h={this.props.utensil} ></colorGrid1>
            <br></br>
            <br></br>
            <colorGrid2/>
        </div>
    )
    }
} */





// tool={
//   brush:thin,
//   type:brush,
//   color:red,
//}



// {
//     console.log({color})

//     return(
//         // <div id="colors1">
//         //    <div onClick={event=>handleUtensilColors(event.target.name)} style={{width:'20px',height:'20px',backgroundColor:color,margin:'0px',float:'left',borderStyle:'inset'}}></div> 
//         // </div>
//     )
// }) 
