import React, { Component } from 'react';
import './style.css';
import './App.css';
import Nav from './nav.js'
import VideoLoop from './videoLoop.js'
import AboutMe from './aboutMe.js'
import VideoProject from './videoProject.js'
import WebProject from './webProject.js'


class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      document.getElementById("load").style.display = "none"
      document.getElementById("root").className = ""
    }, 1000);


  }

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <Nav />
        <VideoLoop />
        <AboutMe />


        {/* Second Parallax Image VIDEO */}
        <div className="bgimg-2 w3-display-container w3-opacity-min">
          <div className="w3-display-middle">
            <span className="w3-xxlarge w3-text-white w3-wide">VIDEO</span>
          </div>
        </div>
        {/* -----------------------------*/}


        <VideoProject />

        {/* <!-- Second Parallax Image with Portfolio Text --> */}
        <div className="bgimg-4 w3-display-container w3-opacity-min">
          <div className="w3-display-middle">
            <span className="w3-xxlarge w3-text-white w3-wide">WEB</span>
          </div>
        </div>
      
        <WebProject />

      </div>
    );
  }
}


export default App;
