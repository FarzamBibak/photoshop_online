// paintSet.js

function paintSet(w, c, o) {
    return {
        type:
            "paintSet",

        payload:
        {
            "width": w,
            "color": c,
            "opacity": o,
        }
    }
}

export default paintSet;
