import React, { Component } from 'react'
import '../App.css'
import touring from "../video/touring.jpg"
import touringLogo from "../image/touringLogo.png"
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import arrow from "../image/arrow.png"
import arrow2 from "../image/arrow2.png"


class stairsmasterComp extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  touringOff = () => {
    this.props.history.push('/')

  }

  moin = () => {
    this.props.history.push('/demo')

  }

  plus = () => {
    this.props.history.push('/stairsmaster')

  }


  render() {

    return (
      <div id="myModal" className="modal">
        <i className="fa fa-close w3-xxlarge closex w3-hover-text-black" onClick={this.touringOff}></i>
        <div className="overlay-content">

          <img className="logoWidth" id="logoW" src={touringLogo} alt="logo" />
          <div className="frame">
            <img className="arrow " id="logoW" onClick={this.moin} src={arrow2} alt="logo" />
            <iframe className="iphoneframe" id="iframe2" title="touring" src="https://player.vimeo.com/video/209289776" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
              mozallowfullscreen="true" allowFullScreen></iframe>
            <img className="arrow" id="logoW" onClick={this.plus} src={arrow} alt="logo" />
          </div>

          <p className="videoTexte">Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        </div>
      </div>

    )

  }
}

export default withRouter(stairsmasterComp)