// bodySize.js

function bodySize(w, h) {
    return ({
        type: "bodySize",
        payload: {
            bodyHeight: h,
            bodyWidth: w,
        }
    })
}

export default bodySize;
