// imgSize.js

function imgSize(w, h) {
    return ({
        type:
            "imgSize",
        payload:
        {
            "imgHeight": h,
            "imgWidth": w,
        }
    })
}

export default imgSize;

