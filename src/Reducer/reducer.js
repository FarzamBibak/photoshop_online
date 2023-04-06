// reducer.js

const initialStates = {
    paintColor: 'black',
    paintLineWidth: '1',
    mouseShape: '',
    isSelected: 0,
    selectX1: '',
    selectX2: '',
    selectY1: '',
    selectY2: '',
    moveX1: '',
    moveX2: '',
    moveY1: '',
    moveY2: '',
    isTouchedTopCrop: 0,
    isTouchedLeftCrop: 0,
    isTouchedRightCrop: 0,
    isTouchedDownCrop: 0,
    yTopCrop: '',
    yDownCrop: '',
    xRightCrop: '',
    xLeftCrop: '',
    scaleRatio: 1,
    canvasStyle: '',
    rotateAngle: '',
    textFont: '',
    textSize: 12,
    textPositionX: '',
    textPositionY: '',
    panelDisplay: 0,
    Image_src: 'data:image/jpeg;base64,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',

    bodyWidth: '',
    bodyHeight: '',

    imgWidth: 0,
    imgHeight: 0,

    imgDefaultWidth: 0,
    imgDefaultHeight: 0,

    canvasStyleWidth: '',
    canvasStyleHeight: '',

    zoomShowValue: 100,
    zoomUseValue: 1,
    imgLoad: 0,

    context: '',
    canvas: '',
}

function setDisplaySettings(state, display) {
    if (display === 1) {
        return {
            ...state,

            panelDisplay: 1,
        }
    } else if (display === 0) {
        return {
            ...state,

            panelDisplay: 0,
        }
    }
}

function drawCanvas(
    img,
    canvasWidth,
    canvasHeight,
    zoom,
    state,
    action,
    ctx) {
    if (ctx) {
        ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
        return {
            ...state,

            canvas: img,
            canvasStyleWidth: canvasWidth,
            canvasStyleHeight: canvasHeight,
            context: ctx,
        }
    } else {
        return {
            ...state
        }
    }
}

export const settingsReducer = (state = initialStates, action) => {
    switch (action.type) {
        // case "canvasStyle":
        //     return setStyleSiz(action.payload.canvasStyleWidth, action.payload.canvasStyleHeight, state, action, state.zoomUseValue);

        case "canvasDraw":
            return drawCanvas(
                action.payload.canvas,
                action.payload.canvasStyleWidth,
                action.payload.canvasStyleHeight,
                state.zoomUseValue,
                state,
                action,
                action.payload.context
            );

        case "displayPanel":
            return setDisplaySettings(state, action.payload.display)

        case "bodySize":
            return {
                ...state,

                bodyWidth: action.payload.bodyWidth,
                bodyHeight: action.payload.bodyHeight,
            }

        case "imgSize":
            return {
                ...state,

                imgDefaultWidth: action.payload.imgWidthDefault,
                imgWidth: action.payload.imgWidthDefault,
                canvasStyleWidth: action.payload.imgWidthDefault,

                imgDefaultHeight: action.payload.imgHeightDefault,
                imgHeight: action.payload.imgHeightDefault,
                canvasStyleHeight: action.payload.imgHeightDefault,
            }

        case "zoomValue":
            return {
                ...state,

                zoomShowValue: action.payload.showValue,
                canvasStyleWidth: state.canvasStyleWidth,

                zoomUseValue: action.payload.useValue,
                canvasStyleHeight: action.payload.canvasStyleHeight,
            }

        case "changeSrc":
            return {
                ...state,

                Image_src: action.payload.Image_src,
                counter: 0,
            }

        case "paintSettings":
            return {
                ...state,

                mouseShape: "paintShape",

                paintColor: action.payload.color,
                paintLineWidth: action.payload.width,
            }

        case "selectSettings":
            return {
                ...state,

                isSelected: 1,
                mouseShape: "selectShape",

                selectX1: action.payload.x1,
                selectY1: action.payload.y1,
                selectX2: action.payload.x2,
                selectY2: action.payload.y2,
            }

        case "moveSettings":
            return {
                ...state,

                mouseShape: "moveShape",

                moveX1: action.payload.x1,
                moveY1: action.payload.y1,
                moveX2: action.payload.x2,
                moveY2: action.payload.y2,
            }

        case "cropSettings":
            let touchTop = 0,
                touchDown = 0,
                touchLeft = 0,
                touchRight = 0

            if (action.payload.yTop) {
                touchTop = 1
            }
            else if (action.payload.yDown) {
                touchDown = 1
            }
            else if (action.payload.xLeft) {
                touchLeft = 1
            }
            else if (action.payload.xRight) {
                touchRight = 1
            }

            return {
                ...state,

                isTouchedTopCrop: touchTop,
                isTouchedDownCrop: touchDown,
                isTouchedLeftCrop: touchLeft,
                isTouchedRightCrop: touchRight,

                yTopCrop: action.payload.yTop,
                yDownCrop: action.payload.yDown,
                xLeftCrop: action.payload.xLeft,
                xRightCrop: action.payload.xRight,
            }

        case "scaleSettings":
            return {
                ...state,

                scaleRatio: action.payload.ratio,
            }

        case "filterImageSettings":
            return {
                ...state,

                canvasStyle: action.payload.css,
            }

        case "rotateSettings":
            return {
                ...state,

                rotateAngle: action.payload.angle,
            }

        case "textSettings":
            return {
                ...state,

                textFont: action.payload.font,
                textSize: action.payload.size,
                textPositionX: action.payload.positionX,
                textPositionY: action.payload.positionY,
            }

        default:
            return initialStates;
    }
}
