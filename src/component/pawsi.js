import React, { Component } from 'react'
import '../App.css'
import pawsiPic from "../image/pawsiLogo.png"
import arrow from "../image/arrow.png"
import arrow2 from "../image/arrow2.png"
import { withRouter } from 'react-router-dom'



class pawsi extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  Off = () => {
    this.props.history.push('/')

  }
  moin = () => {
    this.props.history.push('/muralLiveSession')

  }

  plus = () => {
    this.props.history.push('/demo')

  }

  render() {

    return (
      <div id="myModal" className="modal">
        <i className="fa fa-close w3-xxlarge closex w3-hover-text-black" onClick={this.Off}></i>
        <div className="overlay-content">
          <img className="logoWidth" id="logoW" src={pawsiPic} alt="logo" />

          <div className="frame3">
            <img className="arrow" id="logoW" onClick={this.moin} src={arrow2} alt="logo" />

            <iframe className="iphoneframe" id="iframe2" title="touring" src="https://player.vimeo.com/video/237827592" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
              mozallowfullscreen="true" allowFullScreen></iframe>
            <img className="arrow" id="logoW" onClick={this.plus} src={arrow} alt="logo" />
          </div>
          <p className="videoTexte">Pawsitively health is a one of a kind platform that share pet content. A good example of my motion design and editing skills (editing, animation, soundmix, 2d cartoon animation, title animation, picture animation, 3d motion tracker and 3d animation). </p>
 
        </div>

        
        
      </div>

    )

  }
}

export default withRouter(pawsi)