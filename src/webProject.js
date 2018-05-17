import React, { Component } from 'react'
import './App.css'
import mac from "./web/mac.png"
import ipad from "./web/ipad.png"
import iphone from "./web/iphone.png"
import tomProSkier from "./web/tomProSkier.png"
import logoanim1 from "./web/logoanim1.png"
import poster from "./web/poster.png"
import Artboard from "./web/Artboard 1.png"
import wndrs from "./image/wndrs anim .png"
import commingSoon from "./image/commingSoon.png"
import { Link } from 'react-router-dom'



class WebProject extends Component {
    constructor() {
        super();

        this.state = {

        };
    }


    posterClick = () => {
        this.setState({ poster: true })

    }

    posterOff = () => {
        this.setState({ poster: false })

    }
  
    render() {
        if (this.state.alibay === true) {
            return (
                <div id="myModal" className="modal">
                    <i className="fa fa-close w3-xxlarge closex w3-hover-text-black" onClick={this.alibayOff}></i>
                    <div className="overlay-content">

                        <img className="logoWidth" id="logoW" src={Artboard} alt="logo" />
                        <div className="frame">
                            <iframe id="iframe2" title="touring" src="https://player.vimeo.com/video/269197596" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
                                mozallowfullscreen="true" allowFullScreen></iframe>
                        </div>

                        <p className="videoTexte">Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                          et dolore magna aliqua. or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>
                </div>

            )
        }

        if (this.state.poster === true) {
            return (
                <div id="myModal" className="modal">
                    <i className="fa fa-close w3-xxlarge closex w3-hover-text-black" onClick={this.posterOff}></i>
                    <div className="overlay-content">

                        <img className="logoWidth" id="logoW" src={commingSoon} alt="logo" />



                    </div>
                </div>

            )
        }

        if (this.state.clnr === true) {
            return (
                <div id="myModal" className="modal">
                    <i className="fa fa-close w3-xxlarge closex w3-hover-text-black" onClick={this.clnrOff}></i>
                    <div className="overlay-content">

                        <img className="logoWidth3" id="logoW" src={logoanim1} alt="logo" />
                        <div className="frame">
                            <iframe id="iframe2" title="touring" src="https://player.vimeo.com/video/269197637" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
                                mozallowfullscreen="true" allowFullScreen></iframe>
                        </div>

                        <p className="videoTexte">Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                          et dolore magna aliqua. or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          <iframe   title="touring" src="https://player.vimeo.com/video/258202836" width="320" height="180" frameborder="0" allowfullscreen></iframe>

                    </div>
                </div>

            )
        }

        if (this.state.wndrsState === true) {
            return (
                <div id="myModal" className="modal">
                    <i className="fa fa-close w3-xxlarge closex w3-hover-text-black" onClick={this.wndrsOff}></i>
                    <div className="overlay-content">

                        <img className="logoWidth4" id="logoW" src={wndrs} alt="logo" />
                        <div className="frame">
                            <iframe id="iframe2" title="touring" src="https://player.vimeo.com/video/265296801" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
                                mozallowfullscreen="true" allowFullScreen></iframe>
                        </div>

                        <p className="videoTexte">Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                          et dolore magna aliqua. or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>
                </div>

            )
        }

        return (
            <div className="w3-content  w3-padding-64 padding5" id="web">
                <h3 className="w3-center">MY WORK</h3>
                <p className="w3-center">
                    <em>Here are some of my latest lorem work ipsum tipsum.
                <br />Click on the images to make them bigger</em>
                </p>


                <div className="w3-row w3-center">




                    <div className="w3-col  m0 padding1">
                    <Link to='/alibay'> <img alt="" src={mac} className="w3-hover-opacity width100"  /> </Link> 
                        <img alt="" src={Artboard} className=" width30" />
                    </div>
                    <div className="w3-col s6 m6 padding1">
                        <img alt="" src={ipad} className="w3-hover-opacity width100" onClick={this.posterClick} />
                        <img alt="" src={poster} className="width30" />
                    </div>
                    <div className="w3-col s6 m6 padding1">
                    <Link to='/clnr'><img alt="" src={iphone} className="w3-hover-opacity width100" onClick={this.clnrClick} /> </Link> 
                        <img alt="" src={logoanim1} className=" width10" />
                    </div>
                    <div className="w3-col   m0 padding1">
                    <Link to='/wndrsGame'>
                            <img src={tomProSkier} className="w3-hover-opacity width100" alt="" /></Link> 
                    
                        <img alt="" src={wndrs} className=" width10" />
                    </div>


                </div>

            </div>
        );
    }
}

export default WebProject
