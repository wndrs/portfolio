import React, { Component } from 'react'
import './App.css'
import mac from "./web/mac.png"
import ipad from "./web/ipad.png"
import iphone from "./web/iphone.png"
import tomProSkier from "./web/tomProSkier.png"
import logoanim1 from "./web/logoanim1.png"
import poster from "./web/poster.png"
import Artboard from "./web/Artboard 1.png"
import wndrs from "./images/wndrs anim .png"




class WebProject extends Component {


    render() {
        return (
            <div className="w3-content  w3-padding-64 padding5" id="web">
                <h3 className="w3-center">MY WORK</h3>
                <p className="w3-center">
                    <em>Here are some of my latest lorem work ipsum tipsum.
                <br />Click on the images to make them bigger</em>
                </p>


                <div className="w3-row w3-center">




                    <div className="w3-col s0 m0 padding1">
                        <img alt="" src={mac} className="w3-hover-opacity width100" />
                        <img alt="" src={Artboard} className=" width30" />
                    </div>
                    <div className="w3-col s0 m6 padding1">
                        <img alt="" src={ipad} className="w3-hover-opacity width100" />
                        <img alt="" src={poster} className="width30" />
                    </div>
                    <div className="w3-col s0 m6 padding1">
                        <img alt="" src={iphone} className="w3-hover-opacity width100" />
                        <img alt="" src={logoanim1} className=" width10" />
                    </div>
                    <div className="w3-col s0 m0 padding1">
                        <a className="w3-center" href="https://wndrs.github.io/tomProSkier.html">
                            <img src={tomProSkier} className="w3-hover-opacity width100" alt="" />
                        </a>
                        <img alt="" src={wndrs} className=" width10" />
                    </div>


                </div>

            </div>
        );
    }
}

export default WebProject
