// setSettingType.js

function setSettingType(type, cursor) {
    return {
        type:
            "setSettingType",

        payload:
        {
            "cursorCss": cursor,
            "settingType": type,
        }
    }
}

export default setSettingType;
