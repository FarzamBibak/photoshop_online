// reducer.js

const initialStates = {
    paintColor: 'black',
    paintLineWidth: 5,
    paintOpacity: 0.1,
    paintActive: false,
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
    canvasStyle: "test",
    rotateAngle: '',
    rotate: false,
    textFont: '',
    textSize: 12,
    textPositionX: '',
    textPositionY: '',
    panelDisplay: 'none',
    Image_src: '',
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
    Img: '',
    canvas: '',
    settingType: '',
    ctx: '',
    canvasRef: Object,
    canvasCursorCssHandeler: "cursor-default"
}

function setDisplaySettings(state, display) {
    if (display === "block") {
        return {
            ...state,

            panelDisplay: "block",
        }
    } else if (display === "none") {
        return {
            ...state,

            panelDisplay: "none",
            paintActive: false,
            canvasCursorCssHandeler: ""
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
    ctx,
    canvas) {
    if (ctx) {
        ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
        return {
            ...state,

            Img: img,
            canvasStyleWidth: canvasWidth,
            canvasStyleHeight: canvasHeight,
            context: ctx,
            canvas: canvas,
        }
    } else {
        return {
            ...state
        }
    }
}

export const settingsReducer = (state = initialStates, action) => {
    switch (action.type) {
        case "paintSet":
            return {
                ...state,

                canvasCursorCssHandeler: "cursor-paint",
                paintColor: action.payload.color,
                paintLineWidth: action.payload.width,
                paintOpacity: action.payload.opacity,
                paintActive: true
            }
        case "canvasDraw":
            return drawCanvas(
                action.payload.imageTag,
                action.payload.canvasStyleWidth,
                action.payload.canvasStyleHeight,
                state.zoomUseValue,
                state,
                action,
                action.payload.context,
                action.payload.canvas
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
                zoomUseValue: action.payload.useValue,
            }


        case "setCtx":
            return {
                ...state,

                ctx: action.payload.ctx,
            }

        case "setSettingType":
            return {
                ...state,

                canvasCursorCssHandeler: action.payload.cursorCss,
                settingType: action.payload.settingType,
                panelDisplay: "block"
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

                paintColor: action.payload.color,
                paintLineWidth: action.payload.width,
            }

        case "selectSettings":
            return {
                ...state,

                isSelected: 1,

                selectX1: action.payload.x1,
                selectY1: action.payload.y1,
                selectX2: action.payload.x2,
                selectY2: action.payload.y2,
            }

        case "moveSettings":
            return {
                ...state,

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

                canvasStyle: action.payload,
            }

        case "rotateSettings":
            return {
                ...state,

                rotateAngle: action.payload.transform,
            }

        case "textSettings":
            return {
                ...state,

                textFont: action.payload.font,
                textSize: action.payload.size,
                textPositionX: action.payload.positionX,
                textPositionY: action.payload.positionY,
            }

        case "canvasRef":
            return {
                ...state,

                canvasRef: action.payload.canvasRef
            }

        default:
            return initialStates;
    }
}

export default setDisplaySettings;
