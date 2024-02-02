import React from "react";



function Tools({ handleUtensil }) {
    return (
        <div id="Tools">
            <button
                className="tools-type"
                name="brush"
                onClick={event => handleUtensil(event.target.name, "tool")}>✏️</button>
            <br></br>
            <button
                className="tools-type"
                name="bucket"
                onClick={event => handleUtensil(event.target.name, "tool")}>🧹</button>
            <br></br>
            <button
                className="tools-type"
                name="eraser"
                onClick={event => handleUtensil(event.target.name, "tool")}>❌</button>
        </div>
    );
}


export default Tools;