// App.js

import '../static/css/main.css';
import React, { useState } from 'react';
import Body from './body';
import Panel from './panel'
import Container from '../Componnet/Container';


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Panel />
        <Body />
        <Container/>
      </div>
    )
  }
}

// function App() {
//   const [utensil , SetUtensil] = useState({
//     tool:"brush",
//     weight:"size1",
//     color:"#FFFFFF"
//   })

//   function handleUtensil(updateItem,keyHolder){
//     const newUtensil={...utensil}
//     if(updateItem === "eraser"){
//       newUtensil["color"] = "#FFFFFF";
//       newUtensil["tool"] = "brush";
//       SetUtensil(newUtensil)
//     } else {
//       newUtensil[keyHolder] = updateItem.toLoweCase()
//     }
//   }
// }

export default App;
