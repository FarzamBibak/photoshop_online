// canvasDraw.js

function canvasDraw(canvas, width, height, ctx) {
    return ({
        type:
            "canvasDraw",
        payload:
        {
            "canvas": canvas,
            "canvasStyleWidth": width,
            "canvasStyleHeight": height,
            "context": ctx,
        }
    })
}

export default canvasDraw;
