import React, { Component } from 'react'
import '../App.css'
import logoanim1 from "../web/logoanim1.png"
import arrow from "../image/arrow.png"
import arrow2 from "../image/arrow2.png"
import { withRouter } from 'react-router-dom'



class clnr extends Component {
  constructor() {
    super();

    this.state = {
      teaser: false
    };
  }

  Off = () => {
    this.props.history.push('/')

  }
  moin = () => {
    this.props.history.push('/alibay')

  }

  plus = () => {
    this.props.history.push('/wndrsGame')

  }

  teaser = () => {
    this.setState({ teaser: true })

  }

  render() {

    return (
      <div id="myModal" className="modal">
        <i className="fa fa-close w3-xxlarge closex w3-hover-text-black" onClick={this.Off}></i>
        <div className="overlay-content">
          <img className="logoWidth4" id="logoW" src={logoanim1} alt="logo" />

          <div className="frame">
            <img className="arrow" id="logoW" onClick={this.moin} src={arrow2} alt="logo" />

            <iframe className="iphoneframe" id="iframe2" title="touring" src="https://player.vimeo.com/video/269197637" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
              mozallowfullscreen="true" allowFullScreen></iframe>
            <img className="arrow" id="logoW" onClick={this.plus} src={arrow} alt="logo" />
          </div>
          <p className="videoTexte"> clnr.me is a mobile application for independent dry cleaners & customers. Developed with JavaScript, React, Firebase, Express, Node, CSS & HTML. Group project at decodeMtl. </p>
          {!this.state.teaser && <p onClick={this.teaser} className="videoTexte w3-hover-text-black">click here to clnr add </p>}
          <div className="margtop">
            {this.state.teaser && <iframe className="iphoneframe" id="iframe2" title="touring" src="https://player.vimeo.com/video/258202836" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
              mozallowfullscreen="true" allowFullScreen></iframe>}
          </div>
        </div>

      </div>

    )

  }
}

export default withRouter(clnr)