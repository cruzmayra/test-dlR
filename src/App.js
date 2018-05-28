import React, { Component } from 'react';
import './App.css';

//Components
import Contenedor from './Components/Container.js'

class App extends Component {
  render() {
    return (
      <div>
        <h1>TV Shows</h1>
        <Contenedor tabIndex="-1"/>        
      </div>
      )
  }
}

export default App;
