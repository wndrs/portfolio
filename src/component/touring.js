import React, { Component } from 'react'
import '../App.css'
import touringLogo from "../image/touringLogo.png"
import { withRouter } from 'react-router-dom'
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

          <p  className="videoTexte">Chic-Choc Mountains, QC.  Challenging filming, still, my passion. Twenty hours round trip drive for 4 days of filming, in unfortunate bad ski conditions. Dom Laporte, Nuka Choquette and Marc-Antoine Belhumeur ended up doing some nasty lines. My intent was to demonstrate the experience we lived that continuously passed from scared to joyful.</p>

        </div>
      </div>

    )

  }
}

export default withRouter(stairsmasterComp)