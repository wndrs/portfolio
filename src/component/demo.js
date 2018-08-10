import React, { Component } from 'react'
import '../App.css'
import demoPic from "../image/wndrs anim .png"
import arrow from "../image/arrow.png"
import arrow2 from "../image/arrow2.png"
import { withRouter } from 'react-router-dom'



class demo extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  Off = () => {
    this.props.history.push('/')

  }
  moin = () => {
    this.props.history.push('/pawsi')

  }

  plus = () => {
    this.props.history.push('/muralLiveSession')

  }

  render() {

    return (
      <div id="myModal" className="modal">
        <i className="fa fa-close w3-xxlarge closex w3-hover-text-black" onClick={this.Off}></i>
        <div className="overlay-content">
          <img className="logoWidth7" id="logoW" src={demoPic} alt="logo" />

          <div className="frame">
            <img className="arrow" id="logoW" onClick={this.moin} src={arrow2} alt="logo" />

            <iframe className="iphoneframe" id="iframe2" title="touring" src="https://player.vimeo.com/video/248658478" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
              mozallowfullscreen="true" allowFullScreen></iframe>
            <img className="arrow" id="logoW" onClick={this.plus} src={arrow} alt="logo" />
          </div>
          <p className="videoTexte">This is a compilation of various sport shoots, filmed and edited by me.    </p>
          <a href="https://vimeo.com/wndrs">Click here to see all wndrs videos </a>
        </div>
      </div>

    )

  }
}

export default withRouter(demo)