import React, { Component } from 'react'
import '../App.css'
import skatePic from "../image/muralLogo.png"
import arrow from "../image/arrow.png"
import arrow2 from "../image/arrow2.png"
import { withRouter } from 'react-router-dom'



class muralLiveSession extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  Off = () => {
    this.props.history.push('/')

  }
  moin = () => {
    this.props.history.push('/demo')

  }

  plus = () => {
    this.props.history.push('/pawsi')

  }

  render() {

    return (
      <div id="myModal" className="modal">
        <i className="fa fa-close w3-xxlarge closex w3-hover-text-black" onClick={this.Off}></i>
        <div className="overlay-content">
          <img className="logoWidth4" id="logoW" src={skatePic} alt="logo" />

          <div className="frame">
            <img className="arrow" id="logoW" onClick={this.moin} src={arrow2} alt="logo" />

            <iframe className="iphoneframe" id="iframe2" title="touring" src="https://player.vimeo.com/video/273820526" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
              mozallowfullscreen="true" allowFullScreen></iframe>
            <img className="arrow" id="logoW" onClick={this.plus} src={arrow} alt="logo" />
          </div>
          <p className="videoTexte"> This is Mural Live session. A project where 8 artist where performing new song live in front of the camera. In this project, i was filming and edithing all the videos. I also animated the intro.<a href="https://www.youtube.com/playlist?list=PLXnWw8lJbIsmDpYt2ojyrus1xcB8r_wYb">Click here to see all videos on mural page</a> </p>
        </div>
      </div>

    )

  }
}

export default withRouter(muralLiveSession)