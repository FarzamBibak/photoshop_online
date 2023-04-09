

function RotateSettings (rotate){
    return{
        type:
          "rotateSettings",

        payload:
        {
    transform:"rotate(" + rotate + "deg)"
   // transform: rotate(45deg);
}

    }
}
export default RotateSettings;


//transform.Rotate(xAngle, yAngle, zAngle,


