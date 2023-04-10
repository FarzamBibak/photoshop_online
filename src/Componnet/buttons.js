// buttons.js

import React , { useState }from "react";
import '../static/css/main.css';
import Img from "./img";
import Menu from "./Menu";


export default function App() {
    const [isShown, setIsShown] = useState(false);
  
    const handleClick = event => {

      setIsShown(current => !current);
    };
  
    return (
      <div>
        <button onClick={handleClick}>Click</button>
        {isShown && <Img />}
        {isShown && <Menu />}
      </div>
    );
  }