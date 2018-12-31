import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particleOptions from './particlesjs-config.json';
import Intro from './Pages/Intro/Intro';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';



class App extends Component {
  render() {
    return (
      <div className="App flex flex-column">
              <Particles className='particles'
              params={particleOptions}
            />
      <Intro/>
      <About/>
      <Portfolio/>
      </div>
    );
  }
}

export default App;
