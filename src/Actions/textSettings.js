

function textSettings (textsize,textfont,textPositionX,textpositionY){
    return{
        type:
          "textSettings",

        payload:
        {
            "textsize" :textsize,
            "textfont" :textfont,
            "textPositionX" :textPositionX,
            "textPositionY" :textpositionY


        }
    }
}


export default textSettings;




/*
textFont: action.payload.font,
                textSize: action.payload.size,
                textPositionX: action.payload.positionX,
                textPositionY: action.payload.positionY,  */