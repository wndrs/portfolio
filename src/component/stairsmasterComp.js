import React, { Component } from 'react'
import '../App.css'
import stairsmaster from "../video/stairsmaster.jpg"
import stairsMasterLogo from "../image/stairsMasterLogo.png"
import arrow from "../image/arrow.png"
import arrow2 from "../image/arrow2.png"
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'


class stairsmasterComp extends Component {
  constructor() {
    super();

    this.state = {
      teaser:false
    };
  }

  stairsmasterOff = () => {
    this.props.history.push('/')

  }
  moin = () => {
    this.props.history.push('/touring')

  }

  plus = () => {
    this.props.history.push('/skate')

  }

  teaser= () => {
    this.setState({ teaser: true })

  }

  full = () => {
    this.setState({ teaser: false })

  }

  render() {

    return (
      <div id="myModal" className="modal">
        <i className="fa fa-close w3-xxlarge closex w3-hover-text-black" onClick={this.stairsmasterOff}></i>
        <div className="overlay-content">
          <img className="logoWidth2 bouzinb" id="logoW" src={stairsMasterLogo} alt="logo" />

          <div className="frame">
            <img className="arrow" id="logoW" onClick={this.moin} src={arrow2} alt="logo" />

            {!this.state.teaser && <iframe className="iphoneframe" id="iframe2" title="touring" src="https://player.vimeo.com/video/199738961" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
              mozallowfullscreen="true" allowFullScreen></iframe>}

            {this.state.teaser && <iframe className="iphoneframe " id="iframe2" title="touring" src="https://player.vimeo.com/video/200273778" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
              mozallowfullscreen="true" allowFullScreen></iframe>}

            <img className="arrow" id="logoW" onClick={this.plus} src={arrow} alt="logo" />
          </div>



          <p className="videoTexte">StairsMaster is the biggest urbain ski competition in Canada. Only 5 pro skier get to be invited to this event. Road tripping around Quebec province with practically
           no budget, definitely no plan and a lot of beer is  Dom Laporte definition of urban skiing. This edit is roff and cheap to give the feel of what urbain skiing is for us. You can also watch the
           teaser of this project below.   </p>

          {!this.state.teaser && <p onClick={this.teaser} className="videoTexte w3-hover-text-black">click here to see teaser  </p>}
          {this.state.teaser && <p onClick={this.full} className="videoTexte w3-hover-text-black">click here to see full project  </p>}
        </div>
      </div>

    )

  }
}

export default withRouter(stairsmasterComp)