import React ,{ useState }from "react";

function BrushSize( handleUtensil) {

    const [utensil, setUtensil] = useState({
        tool:"brush",
        weight:"size",
        color:"color",
    })

    function handleUtensil2(updateItem){
        const newUtensil={...utensil}
        newUtensil.tool = updateItem;
        console.log(newUtensil)
    }

    return (
        <> 
        <select onChange={(event)=>handleUtensil2(event.target.name,utensil)} 
        id="brush-detail">
            <option name="size1" onClick={(event)=>handleUtensil2(event.target.name,utensil)}>size1</option>
            <option name="size2">size2</option>
            <option name="size3">size3</option>
        </select>
        </>
    )
}

export default BrushSize;
