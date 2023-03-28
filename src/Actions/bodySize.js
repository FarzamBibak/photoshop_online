// bodySize.js

function size(w, h) {
    return ({
        type: "bodySize",
        payload: {
            bodyHeight: h,
            bodyWidth: w,
        }
    })
}

export default size;
