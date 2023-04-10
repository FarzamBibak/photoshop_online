// paintColor.js

function paintColor(c) {
    return {
        type:
            "paintSet",

        payload:
        {
            "color": c,
        }
    }
}

export default paintColor;
