// imgSize.js

function settingDisplay(display) {
    return ({
        type:
            "displayPanel",
        payload:
              {
            "display":display
              }
    })
}


function setSettingType(type){
    return ({
        type:
            "setSettingType",
        payload:
            {
            "settingType":type
            }
    })
}


export default  setSettingType