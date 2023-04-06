// canvasStyleSet.js

function canvasStyleSet(canvasStyleWidth, canvasStyleHeight) {
    return ({
        type:
            "canvasStyle",
        payload:
        {
            "canvasStyleWidth": canvasStyleWidth,
            "canvasStyleHeight": canvasStyleHeight,
        }
    })
}

export default canvasStyleSet;
