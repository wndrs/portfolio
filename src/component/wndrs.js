import React, { Component } from 'react'
import '../App.css'
import logoBlack from '../image/logoBlack.png'
import arrow from "../image/arrow.png"
import arrow2 from "../image/arrow2.png"
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'


class wndrs extends Component {
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
    this.props.history.push('/touring')

  }

  render() {

    return (
      <div id="myModal" className="modal">
        <i className="fa fa-close w3-xxlarge closex w3-hover-text-black" onClick={this.Off}></i>
        <div className="overlay-content">
          <img className="logoWidth4" id="logoW" src={logoBlack} alt="logo" />

          <div className="frame2">
          

            <iframe className="iphoneframe" id="iframe2" title="touring" src="https://player.vimeo.com/video/238640087" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
              mozallowfullscreen="true" allowFullScreen></iframe>

             
  
          </div>
          <p className="videoTexte">Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

    )

  }
}

export default withRouter(wndrs)