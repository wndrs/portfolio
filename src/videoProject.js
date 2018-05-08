import React, { Component } from 'react'
import './App.css'
import touring from "./video/touring.jpg"
import stairsmaster from "./video/stairsmaster.jpg"
import skate from "./video/skate.jpg"
import pawsi from "./video/pawsi.jpg"
import demo from "./video/demo.jpg"



class VideoProject extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  touringClick = () => {
    this.setState({ touring: true })

  }

  touringOff = () => {
    this.setState({ touring: false })

  }

  stairsmasterClick = () => {
    this.setState({ stairsmaster: true })

  }

  stairsmasterOff = () => {
    this.setState({ stairsmaster: false })

  }

  skateClick = () => {
    this.setState({ skate: true })

  }

  skateOff = () => {
    this.setState({ skate: false })

  }

  render() {
    if (this.state.touring === true) {
      return (
        <div id="myModal" className="modal">
          <i className="fa fa-close w3-xxlarge closex" onClick={this.touringOff}></i>
          <div className="overlay-content">
            <h3>TOURING</h3>
            <p className="videoTexte">Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="frame">
              <iframe id="iframe2" title="touring" src="https://player.vimeo.com/video/209289776" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
                mozallowfullscreen="true" allowFullScreen></iframe>
            </div>
          </div>
        </div>

      )
    }

    if (this.state.stairsmaster === true) {
      return (
        <div id="myModal" className="modal">
          <i className="fa fa-close w3-xxlarge closex" onClick={this.stairsmasterOff}></i>
          <div className="overlay-content">
            <h3>STAIRS MASTER</h3>
            <p className="videoTexte">Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="frame">
              <iframe id="iframe2" title="touring" src="https://player.vimeo.com/video/199738961" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
                mozallowfullscreen="true" allowFullScreen></iframe>
            </div>
          </div>
        </div>

      )
    }

    if (this.state.skate === true) {
      return (
        <div id="myModal" className="modal">
          <i className="fa fa-close w3-xxlarge closex" onClick={this.skateOff}></i>
          <div className="overlay-content">
            <h3>SKATING IN THE FUTURE</h3>
            <p className="videoTexte">Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="frame">
              <iframe id="iframe2" title="touring" src="https://player.vimeo.com/video/189559042" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
                mozallowfullscreen="true" allowFullScreen></iframe>
            </div>
          </div>
        </div>

      )
    }

    return (
      <div className="w3-content  w3-padding-64 padding5" id="video">
        <h3 className="w3-center">MY WORK</h3>
        <p className="w3-center">
          <em>Here are some of my latest videos.
                <br />Click on the images to make them bigger</em>
        </p>


        <div className="w3-row w3-center">




          <div className="w3-col s6 padding1">
            <img alt="" src={touring} className="w3-hover-opacity width100" onClick={this.touringClick} />

          </div>
          <div className="w3-col s6 padding1">
            <img alt="" src={stairsmaster} className="w3-hover-opacity width100" onClick={this.stairsmasterClick}/>

          </div>
          <div className="w3-col s6 padding1">
            <img alt="" src={skate} className="w3-hover-opacity width100" onClick={this.skateClick} />

          </div>
          <div className="w3-col s6 padding1">
            <img alt="" src={pawsi} className="w3-hover-opacity width100" onClick={this.touringClick}/>

          </div>
          <div className="w3-col s0 padding1">
            <img alt="" src={demo} className="w3-hover-opacity width100" onClick={this.touringClick}/>

          </div>

        </div>

      </div>
    );
  }
}

export default VideoProject
