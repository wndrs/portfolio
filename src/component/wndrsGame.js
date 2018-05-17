
import React, { Component } from 'react'
import '../App.css'
import wndrs from "../image/wndrs anim .png"
import arrow from "../image/arrow.png"
import arrow2 from "../image/arrow2.png"
import playgame from "../image/playgame.png"
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'


class wndrsGame extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  Off = () => {
    this.props.history.push('/')

  }
  moin = () => {
    this.props.history.push('/clnr')

  }

  plus = () => {
    this.props.history.push('/alibay')

  }

  render() {

    return (
      <div id="myModal" className="modal">
        <i className="fa fa-close w3-xxlarge closex w3-hover-text-black" onClick={this.Off}></i>
        <div className="overlay-content">
          <img className="logoWidth4" id="logoW" src={wndrs} alt="logo" />

          <div className="frame">
            <img className="arrow" id="logoW" onClick={this.moin} src={arrow2} alt="logo" />

            <iframe className="iphoneframe" id="iframe2" title="touring" src="https://player.vimeo.com/video/265296801" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
              mozallowfullscreen="true" allowFullScreen></iframe>
            <img className="arrow" id="logoW" onClick={this.plus} src={arrow} alt="logo" />
          </div>
          <p className="videoTexte">Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    
    <a href="http://wndrs.ca/game/"><img className="playgame" id="logoW"  src={playgame} alt="logo" /></a>
        </div>
      
      </div>

    )

  }
}

export default withRouter(wndrsGame)