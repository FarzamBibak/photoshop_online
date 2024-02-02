// settings.js

import React, { useState } from "react";
import ToolType from "./settings/ToolType";
import BrushSize from "./settings/BrushSize"
import ColorContainer from "./settings/ColorsContainer";



function Settings() {


    function handleUtensil(updateItem) {
        const newUtensil = { ...utensil }
        newUtensil.tool = updateItem;
    }

    return (
        <div className="Settings">
            <ToolType />
            <BrushSize />
            <ColorContainer />
        </div>
    )
}

export default Settings;
