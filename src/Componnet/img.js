// img.js

import React , { useRef , useEffect , useState} from "react";
import '../static/css/main.css';
import Menu from "./Menu";
// import { connect } from 'react-redux';
// import imgSize from "../Actions/imgSize";
// import { render } from "@testing-library/react";

class Img extends React.Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
      this.ctxRef = React.createRef();
      this.state = {
        isDrawing: false,
        lineWidth: 5,
        lineColor: "black",
        lineOpacity: 0.1
      };
    }
  
    componentDidMount() {
      const canvas = this.canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.globalAlpha = this.state.lineOpacity;
      ctx.strokeStyle = this.state.lineColor;
      ctx.lineWidth = this.state.lineWidth;
      this.ctxRef.current = ctx;
    }
  
    startDrawing = (e) => {
      this.ctxRef.current.beginPath();
      this.ctxRef.current.moveTo(
        e.nativeEvent.offsetX,
        e.nativeEvent.offsetY
      );
      this.setState({ isDrawing: true });
    };
  
    endDrawing = () => {
      this.ctxRef.current.closePath();
      this.setState({ isDrawing: false });
    };
  
    draw = (e) => {
        console.log("fghjkl")
      if (!this.state.isDrawing) {
        return;
      }
      this.ctxRef.current.lineTo(
        e.nativeEvent.offsetX,
        e.nativeEvent.offsetY
      );
      this.ctxRef.current.stroke();
    };
  
    setLineColor = (color) => {
      this.setState({ lineColor: color });
    };
  
    setLineWidth = (width) => {
      this.setState({ lineWidth: width });
    };
  
    setLineOpacity = (opacity) => {
      this.setState({ lineOpacity: opacity });
    };
  
    render() {
      return (
        <div className="App">
          <div className="draw-area">
            <Menu
              setLineColor={this.setLineColor}
              setLineWidth={this.setLineWidth}
              setLineOpacity={this.setLineOpacity}
            />
            <canvas
              ref={this.canvasRef}
              width="1000px"
              height="1000px"
              onMouseDown={this.startDrawing}
              onMouseUp={this.endDrawing}
              onMouseMove={this.draw}
            />
          </div>
        </div>
      );
    }
  }
  
  export default Img;
  
///////////////////////////////////////////////////
// function Img (size , colorState){

//     const canvasRef = useRef(null)
//     const contextRef = useRef(null)
//     const [isDrawing , setIsDrawing] = useState(false)
//     // const canvas = this.myCanvas.current;    

//     useEffect(()=>{
//             const canvas = canvasRef.current;   
//             canvas.width = window.innerWidth *2;
//             canvas.height = window.innerHeight *2;
//             canvas.style.width = `${window.innerHeight}px`;
//             canvas.style.height = `${window.innerHeight}px`;

//             const context = canvas.getContext("2d") 
//             context.scale(2,2)
//             context.lineCap = "round"
//             context.strokeStyle= colorState
//             context.lineWidth = size
//             contextRef.current = context;
//     } ,[])
//     const startDrawing = ({nativeEvent}) => {
//         const {offsetX , offsetY} = nativeEvent;
//         contextRef.current.beginPath()
//         contextRef.current.moveTo(offsetX , offsetY)
//         setIsDrawing(true)
//     }

//     const finishDrawing = () => {
//         contextRef.current.closePath()
//         setIsDrawing(false)
//     }

//     const draw = ({nativeEvent}) => {
//         if(!isDrawing){
//             return
//         }
//             const {offsetX ,offsetY} = nativeEvent;
//             contextRef.current.lineTo(offsetX , offsetY)
//             contextRef.current.stroke()
//     }
//     return (
//         <canvas
//             ref={this.myCanvas}
//             width={this.props.imgWidth}
//             height={this.props.imgHeight}
//             className="imgCanvas" 
                
//             onMouseDown={startDrawing}
//             onMouseUp={finishDrawing}
//             onMouseMove={draw}
//         />
//     )
// }
// export default Img;

//////////////////////////////////////////////////////////////////////////////////////////


// class Img extends React.Component {
//     constructor(props) {
//         super(props);

//         this.myCanvas = React.createRef();

//         this.componentDidMount = this.componentDidMount.bind(this)
//         this.updateCanvas = this.updateCanvas.bind(this)
//     }

//     componentDidMount() {
//         this.updateCanvas();
//     }

//     updateCanvas() {
//         const canvas = this.myCanvas.current;
//         const ctx = canvas.getContext("2d");

//         const image = new Image();
//         image.src =
//             this.props.Image_src;

//         var width = image.width * 2;
//         var height = image.height * 2;

//         this.props.dispatch(imgSize(width, height));

//         image.onload = function () {
//             ctx.drawImage(image, 0, 0, image.width * 2, image.height * 2)
//         }

//         this.draw = this.draw.bind(this)
//     }
    
    
//     const canvasRef = useref(null)
//     const contextRef = useref(null)
//     const [isDrawing , setIsDrawing] = useState
    
//     useEffect(()=>{
        // const canvas = this.myCanvas.current;
//         canvas.width = window.innerWidth *2;
//         canvas.height = window.innerHeight *2;
//         canvas.style.width = `${window.innerHeight2}px`;
//         canvas.style.height = `${window.innerHeight2}px`;

//         const context = canvas.getContext("2d") 
//         context.scale(2,2)
//         context.lineCap = "round"
//         context.strokeStyle= "black"
//         // color.color
//         context.lineWidth = 5
//         contextRef.current = context;
//     } ,[])

//     startdraw({nativeEvent}) {
//         const {offsetX , offsetY} = nativeEvent;
//         contextRef.current.beginPath()
//         cuntextRef.current.moveTo(offsetX , offsetY)

//     }

//     finishdraw(){

//         }

//      draw(){
//         if (!isDrawing){
//             render
//         }
//         const {offsetX , offsetY} = nativeEvent
//         context
//     }
    
//     render() {
//         return (
//             <canvas
//             ref={this.myCanvas}
//                 width={this.props.imgWidth}
//                 height={this.props.imgHeight}
//                 className="imgCanvas" 
                
//                 onMouseDown={this.startdraw}
//                 onMouseUp={this.finishdraw}
//                 onMouseMove={this.draw}
//                 />
//         )
//     }
// }

// export default connect(mapStateToProps)(Img);




    ////////////////////////////////////////////////////////////////////////////////////////////