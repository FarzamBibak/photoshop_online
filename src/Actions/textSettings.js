// textSettings.js

function textSettings(textsize, textfont, textPositionX, textpositionY) {
    return {
        type:
            "textSettings",

        payload:
        {
            "textsize": textsize,
            "textfont": textfont,
            "textPositionX": textPositionX,
            "textPositionY": textpositionY,
        }
    }
}

export default textSettings;
