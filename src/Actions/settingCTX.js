// settingCTX.js

function ctxText(text) {
    return {
        type:
            "setCtx",

        payload:
        {
            "ctx": text,
        }
    }
}

export default ctxText;
