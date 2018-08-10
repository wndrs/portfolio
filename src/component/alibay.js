import React, { Component } from 'react'
import '../App.css'
import Artboard from "../web/Artboard 1.png"
import arrow from "../image/arrow.png"
import arrow2 from "../image/arrow2.png"
import { withRouter } from 'react-router-dom'



class alibay extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  Off = () => {
    this.props.history.push('/')

  }
  moin = () => {
    this.props.history.push('/wndrsGame')

  }

  plus = () => {
    this.props.history.push('/clnr')

  }

  render() {

    return (
      <div id="myModal" className="modal">
        <i className="fa fa-close w3-xxlarge closex w3-hover-text-black" onClick={this.Off}></i>
        <div className="overlay-content">
          <img className="logoWidth2" id="logoW" src={Artboard} alt="logo" />

          <div className="frame">
            <img className="arrow" id="logoW" onClick={this.moin} src={arrow2} alt="logo" />

            <iframe className="iphoneframe" id="iframe2" title="touring" src="https://player.vimeo.com/video/269197596" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
              mozallowfullscreen="true" allowFullScreen></iframe>
            <img className="arrow" id="logoW" onClick={this.plus} src={arrow} alt="logo" />
          </div>
          <p className="videoTexte">eCommerce marketplace with user & account authentication. Developed with JavaScript, React, Express, Node, CSS & HTML. Group project at decodeMtl.
 </p>
        </div>
      </div>

    )

  }
}

export default withRouter(alibay)