
import React, { Component } from 'react'
import '../App.css'
import wndrs from "../image/wndrs anim .png"
import arrow from "../image/arrow.png"
import arrow2 from "../image/arrow2.png"
import playgame from "../image/playgame.png"
import { withRouter } from 'react-router-dom'



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
          <img className="logoWidth5" id="logoW" src={wndrs} alt="logo" />

          <div className="frame">
            <img className="arrow" id="logoW" onClick={this.moin} src={arrow2} alt="logo" />

            <iframe className="iphoneframe" id="iframe2" title="touring" src="https://player.vimeo.com/video/265296801" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
              mozallowfullscreen="true" allowFullScreen></iframe>
            <img className="arrow" id="logoW" onClick={this.plus} src={arrow} alt="logo" />
          </div>
          <p className="videoTexte">A game where players need to cruise around trees and catch the secret VHS to access a ski video. The ski video is Nuka Choquette and Tom Aubry getting the best turns you can find in Quebec. Click to play.</p>
    
    <a href="http://wndrs.ca/game/"><img className="playgame" id="logoW"  src={playgame} alt="logo" /></a>
        </div>
      
      </div>

    )

  }
}

export default withRouter(wndrsGame)