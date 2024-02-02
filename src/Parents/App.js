// App.js

import React from 'react';
import Body from './body';
import Panel from './panel';


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Panel />
        <Body />
      </div>
    )
  }
}

export default App;
