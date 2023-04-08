import React ,{ useState }from "react";

function BrushSize(setLineOpacity , setLineWidth) {



    return (
        <> 
      <input
        type="range"
        min="1"
        max="100"
        onChange={(e) => {setLineOpacity(e.target.value / 100);}}/>
              <input
        type="range"
        min="3"
        max="20"
        onChange={(e) => {
          setLineWidth(e.target.value);
        }}/>
        </>
    )
}

export default BrushSize;
