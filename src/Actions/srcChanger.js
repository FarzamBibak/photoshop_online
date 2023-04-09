// srcChanger.js

function srcChanger(base64) {
    return {
        type:
            "changeSrc",

        payload:
        {
            "Image_src": base64,
        }
    }
}

export default srcChanger;
