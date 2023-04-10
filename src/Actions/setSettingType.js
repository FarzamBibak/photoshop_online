// setSettingType.js

function setSettingType(type) {
    return {
        type:
            "setSettingType",

        payload:
        {
            "settingType": type,
        }
    }
}

export default setSettingType;
