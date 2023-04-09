// rotalAngle.js

function RotateSettings(rotate) {
    return {
        type:
            "rotateSettings",

        payload:
        {
            transform: "rotate(" + rotate + "deg)",
        }
    }
}

export default RotateSettings;
