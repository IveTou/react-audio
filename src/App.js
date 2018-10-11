import React, { Component } from 'react';
import logo from './logo.svg';
import Player from './components/player';
import Instascrapper from './components/instascrapper';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Player />
        <Instascrapper />
      </div>
    );
  }
}

export default App;
