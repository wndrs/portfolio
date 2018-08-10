import React, { Component, Children } from 'react'
import './App.css'
import pawsiLogo from "./image/pawsiLogo.png"
import logoanim1 from "./image/muralLogo.png"
import LIA from "./image/LIA.gif"
import chienGif from "./image/chien.gif"
import demoGiff from "./image/surf.gif"
import wndrs from "./image/wndrs anim .png"
import { Link } from 'react-router-dom'


class VideoProject extends Component {
  constructor() {
    super();

    this.state = {

    };
  }



  loadVideo =() => {
    this.setState({moreVideo:true})
}
loadLess =() => {
    this.setState({moreVideo:false})
}



  render() {
   


  

    return (
      <div className="w3-content  w3-padding-64 padding5" id="video">
        <h3 className="w3-center">VIDEOS</h3>
        <p className="w3-center">
          <em>Here are some of my latest videos.
                <br />Click to learn about the project</em>
        </p>


        <div className="w3-row w3-center">




          <div className="w3-col m4 s0 padding1">
          <Link to='/muralLiveSession'><img alt="" src={LIA} className="w3-hover-opacity width100"/></Link>
          <img alt="" src={logoanim1} className="  mural" />

          </div>
          <div className="w3-col m4 s0 padding1 ">
          <Link to='/pawsi'> <img alt="" src={chienGif} className="w3-hover-opacity width100" /></Link>
          <img alt="" src={pawsiLogo} className="  mural" />

          </div>
          <div className="w3-col m4 s0 padding1">
          <Link to='/demo'>  <img alt="" src={demoGiff} className="w3-hover-opacity width100" onClick={this.skateClick} /></Link>
          <img alt="" src={wndrs} className="  mural" />
          </div>

        
   

        </div>
       

      </div>
    );
  }
}

export default VideoProject
