// App.js

import '../static/css/main.css';
import React from 'react';
import Body from './body';
import Panel from './panel'
import Settings from '../Componnet/Settings';
import Container from '../Componnet/Container';
// import Menu from './Menu';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Panel />
        <Body />
        <Settings/>
        <Container/>
      </div>
    )
  }
}

export default App;
