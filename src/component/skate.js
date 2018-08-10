import React, { Component } from 'react'
import '../App.css'
import skatePic from "../image/skatePic.png"
import arrow from "../image/arrow.png"
import arrow2 from "../image/arrow2.png"
import { withRouter } from 'react-router-dom'



class skate extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  Off = () => {
    this.props.history.push('/')

  }
  moin = () => {
    this.props.history.push('/stairsmaster')

  }

  plus = () => {
    this.props.history.push('/pawsi')

  }

  render() {

    return (
      <div id="myModal" className="modal">
        <i className="fa fa-close w3-xxlarge closex w3-hover-text-black" onClick={this.Off}></i>
        <div className="overlay-content">
          <img className="logoWidth2" id="logoW" src={skatePic} alt="logo" />

          <div className="frame">
            <img className="arrow" id="logoW" onClick={this.moin} src={arrow2} alt="logo" />

            <iframe className="iphoneframe" id="iframe2" title="touring" src="https://player.vimeo.com/video/189559042" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
              mozallowfullscreen="true" allowFullScreen></iframe>
            <img className="arrow" id="logoW" onClick={this.plus} src={arrow} alt="logo" />
          </div>
          <p className="videoTexte"> Anthony Germain cruising down the street of Montréal. I did filming and editing. </p>
        </div>
      </div>

    )

  }
}

export default withRouter(skate)