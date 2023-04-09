// imgSize.js

function imgSize(defaultWidth, defaultHeight) {
    return {
        type:
            "imgSize",

        payload:
        {
            "imgWidthDefault": defaultWidth,
            "imgHeightDefault": defaultHeight,
        }
    }
}

export default imgSize;
