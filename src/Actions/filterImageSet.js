// filterImageset.js

function filterImageSettings(grayscale, sepia, blur, brightness, contrast) {
    return {
        type:
            "filterImageSettings",

        payload:
        {
            filter: "grayscale(" + grayscale.toString() + "%)" + " sepia(" + sepia + "%)" + " blur(" + blur + "px)" + " brightness(" + brightness + ")" + " contrast(" + contrast + "%)",
        }
    }
}

export default filterImageSettings;
