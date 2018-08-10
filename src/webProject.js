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


        if (this.state.poster === true) {
            return (
                <div id="myModal" className="modalOld">
                    <i className="fa fa-close w3-xxlarge closex w3-hover-text-black" onClick={this.posterOff}></i>
                    <div className="overlay-content">

                        <img className="logoWidth" id="logoW" src={commingSoon} alt="logo" />



                    </div>
                </div>

            )
        }




        return (
            <div className="w3-content  w3-padding-64 padding5" id="web">
                <h3 className="w3-center">WEB</h3>
                <p className="w3-center">
                    <em>Web projects and mobile apps that I’ve worked on.
                <br />Click to learn about each project</em>
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
