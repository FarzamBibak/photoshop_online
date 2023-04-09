// zoomValue.js

function zoomValue(show, use) {
    return {
        type:
            "zoomValue",
            
        payload:
        {
            "showValue": show,
            "useValue": use,
        }
    }
}

export default zoomValue;
