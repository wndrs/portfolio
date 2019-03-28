import React, { Component } from 'react'
import './App.css'
import './style.css';
import loopVideo from './parallax/loop.mp4';
import loopVideoMobile from './parallax/iphoneScreen.gif';
import logo from './parallax/logo.png'

import { withGetScreen } from 'react-getscreen'

class VideoLoop extends Component {
    constructor() {
        super();

        this.state = {
            muted: false,
            logo: true
        };
    }
//sdcasdcv
    componentDidMount() {
        setTimeout(() => {
            document.getElementById("load").style.display = "none"
            document.getElementById("root").className = ""
        }, 2000);
        var logoIntro = document.getElementById("logoIntro")
        var logoW = document.getElementById('logoW')
        var logoB = document.getElementById('logoB')
        var myNavbar = document.getElementById("myNavbar")
        var logoW2 = document.getElementById('logoW2')
        var logoB2 = document.getElementById('logoB2')


    }

    componentWillMount() {

        if (this.props.isMobile()) {
            this.setState({
                video: loopVideoMobile,
                overlay2: "overlay7",
                isMobile: true
            })

        }
        else {

            this.setState({
                video: loopVideo,
                overlay2: "overlay2",
                isMobile: false

            })
        }




    }

    render() {

        window.onscroll = function () {

            if (document.body.scrollTop >= 500 || document.documentElement.scrollTop > 500 && this.logoIntro !== undefined) {
                this.logoIntro.className = "hidden overlay3"
                this.logoW.className = 'hidden'
                this.logoB.className = 'logoWhite'
                this.myNavbar.className = "w3-bar wN-black"
                this.logoW2.className = 'hidden'
                this.logoB2.className = 'logoWhite'
            }
            else if(this.logoIntro !== undefined) {
                this.logoIntro.className = "overlay3"
                this.logoW.className = 'logoWhite'
                this.logoB.className = 'hidden'
                this.myNavbar.className = "w3-bar wN-white"
                this.logoW2.className = 'logoWhite'
                this.logoB2.className = 'hidden'
            }
        };




        return (
            <div className="w3-bar-block w3-white " id="home">
                <div className="overlay3" ref="navbar" id="logoIntro">
                    {this.state.logo && <img className={this.state.overlay2} src={logo} alt="" />}
                </div>
                {!this.state.isMobile && <video className='introVideo' autoPlay loop muted>
                    <source src={this.state.video} type='video/mp4' />
                </video>}

                {this.state.isMobile && <img className='introVideo' src={this.state.video} alt="">

                </img>}


            </div>



        );
    }
}

export default withGetScreen(VideoLoop)


