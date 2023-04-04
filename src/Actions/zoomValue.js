// zoomValue.js

function zoomValue(show, use, width) {
    return ({
        type:
            "zoomValue",
        payload:
        {
            "showValue": show,
            "useValue": use,
            "imgWidth": width,
        }
    })
}

export default zoomValue;
