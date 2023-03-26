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
    Image_src : ''
}

export const settingsReducer = (state = initialStates, action) => {
    switch (action.type) {
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

        // case "doneButton":
        //     if (action.payload.closePanel) {
        //         return {
        //             ...state,

        //             panelDisplay: 0,
        //         }
        //     }

        case "displayPanel":
            if (action.payload.display == 1) {
                return {
                    ...state,

                    panelDisplay: 1,
                }
            } else if (action.payload.display == 0) {
                return {
                    ...state,

                    panelDisplay: 0,
                }
            }

        default:
            return initialStates;
    }
}
