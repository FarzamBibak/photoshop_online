import React from "react";

function Brush({handleUtensil}) {

    return (
        <> 
        <button onClick={event=>handleUtensil(event.target.name)} name='size1'>size1</button>
        <button onClick={event=>handleUtensil(event.target.name)} name='size2'>size2</button>
        <button onClick={event=>handleUtensil(event.target.name)} name='size3'>size3</button>
        

        </>
    )
}

export default Brush;