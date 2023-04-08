// canvasDraw.js

function canvasDraw(image, width, height, ctx, canvas) {
    return ({
        type:
            "canvasDraw",
        payload:
        {
            "imageTag": image,
            "canvasStyleWidth": width,
            "canvasStyleHeight": height,
            "context": ctx,
            "canvas": canvas
        }
    })
}

export default canvasDraw;
