// bodySize.js

function bodySize(bW, bH) {
    return {
        type:
            "bodySize",
            
        payload:
        {
            "bodyWidth": bW,
            "bodyHeight": bH,
        }
    }
}

export default bodySize;
