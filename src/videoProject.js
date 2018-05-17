import React, { Component } from 'react'
import './App.css'
import touring from "./video/touring.jpg"
import stairsmaster from "./video/stairsmaster.jpg"
import skate from "./video/skate.jpg"
import pawsi from "./video/pawsi.jpg"
import demo from "./video/demo.jpg"
import touringLogo from "./image/touringLogo.png"
import stairsMasterLogo from "./image/stairsMasterLogo.png"
import pawsiLogo from "./image/pawsiLogo.png"
import skatePic from "./image/skatePic.png"
import demoPic from "./image/demoPic.png"
import { BrowserRouter, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


class VideoProject extends Component {
  constructor() {
    super();

    this.state = {

    };
  }






  render() {
   


    if (this.state.pawsi === true) {
      return (
        <div id="myModal" className="modal">
          <i className="fa fa-close w3-xxlarge closex w3-hover-text-black" onClick={this.pawsiOff}></i>
          <div className="overlay-content">
          <img className="logoWidth" id="logoW" src={pawsiLogo} alt="logo" />
          
            <div className="frame">
              <iframe id="iframe2" title="touring" src="https://player.vimeo.com/video/237827592" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
                mozallowfullscreen="true" allowFullScreen></iframe>
            </div>
            <p className="videoTexte">Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
       
      )
    }

    if (this.state.demo === true) {
      return (
        <div id="myModal" className="modal">
          <i className="fa fa-close w3-xxlarge closex w3-hover-text-black" onClick={this.demoOff}></i>
          <div className="overlay-content">
          <img className="logoWidth" id="logoW" src={demoPic} alt="logo" />
          
            <div className="frame">
              <iframe id="iframe2" title="touring" src="https://player.vimeo.com/video/248658478" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
                mozallowfullscreen="true" allowFullScreen></iframe>
            </div>
            <p className="videoTexte">Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
       
      )
    }

    return (
      <div className="w3-content  w3-padding-64 padding5" id="video">
        <h3 className="w3-center">MY VIDEO</h3>
        <p className="w3-center">
          <em>Here are some of my latest videos.
                <br />Click on the images to learn about the project.</em>
        </p>


        <div className="w3-row w3-center">




          <div className="w3-col s6 padding1">
          <Link to='/touring'><img alt="" src={touring} className="w3-hover-opacity width100"/></Link>

          </div>
          <div className="w3-col s6 padding1">
          <Link to='/stairsmaster'> <img alt="" src={stairsmaster} className="w3-hover-opacity width100" /></Link>

          </div>
          <div className="w3-col s6 padding1">
          <Link to='/skate'>  <img alt="" src={skate} className="w3-hover-opacity width100" onClick={this.skateClick} /></Link>

          </div>
          <div className="w3-col s6 padding1">
          <Link to='/pawsi'>   <img alt="" src={pawsi} className="w3-hover-opacity width100" onClick={this.pawsiClick}/></Link>

          </div>
          <div className="w3-col s0 padding1">
          <Link to='/demo'> <img alt="" src={demo} className="w3-hover-opacity width100" onClick={this.demoClick}/></Link>

          </div>

        </div>

      </div>
    );
  }
}

export default VideoProject
