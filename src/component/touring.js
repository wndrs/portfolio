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

          <p  className="videoTexte">This was my first time in the Chic-Choc Mountains, QC.  Filming in the backcountry was scary and hard, but and up being something i love. We only had 4 days to make this 20h drive roundtrip  and film as much ski as possible. Not to forget that snow condition where pretty bad compare to what the Chic-Choc Mountains normally offer. No matters what  Dom Laporte, Nuka Choquette and Marc- Antoine Belhumeur put there skis to the test and end up doing some nasty lines. In this video i’m trying to give this same feeling of going from scared to happy.   </p>

        </div>
      </div>

    )

  }
}

export default withRouter(stairsmasterComp)