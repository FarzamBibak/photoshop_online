// paintOpacity.js

function paintOpacity(o) {
    return {
        type:
            "paintSet",

        payload:
        {
            "opacity": o,
        }
    }
}

export default paintOpacity;
