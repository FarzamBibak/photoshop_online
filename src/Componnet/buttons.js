// buttons.js

import React , { useState }from "react";
import '../static/css/main.css';
import Img from "./img";


export default function App() {
    const [isShown, setIsShown] = useState(false);
  
    const handleClick = event => {
      // 👇️ toggle shown state
      setIsShown(current => !current);
  
      // 👇️ or simply set it to true
      // setIsShown(true);
    };
  
    return (
      <div>
        <button onClick={handleClick}>Click</button>
        {isShown && (
          <div>
            <h2>Some content here</h2>
          </div>
        )}
        {isShown && <Img />}
        {isShown && <Box />}
      </div>
    );
  }
  function Box() {
    return (
      <div style={{backgroundColor:"black"}}>
        <h2>Box</h2>
      </div>
    );
  }
  