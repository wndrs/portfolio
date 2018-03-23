import React, { Component } from 'react'
import './App.css'
import './style.css';
import loopVideo from './parallax/loop.mp4';
import loopVideoMobile from './parallax/loopMobile.mp4';
import logo from './parallax/logo.png'

import { withGetScreen } from 'react-getscreen'

class VideoLoop extends Component {
    constructor() {
        super();

        this.state = {
            muted: false,
            logo:true
        };
    }
  


    componentWillMount() {
    
        if (this.props.isMobile()) {
            this.setState({
                video: loopVideoMobile,
                overlay2: "overlay7"
            })

        }
        else {

            this.setState({
                video: loopVideo,
                overlay2: "overlay2"

            })
        }


    }
    render() {
        
        window.onscroll = function () { 
           
            if (document.body.scrollTop >= 500 || document.documentElement.scrollTop > 500 ) {
              document.getElementById("logoIntro").className="hidden overlay3"
              document.getElementById('logoW').className='hidden'
              document.getElementById('logoB').className='logoWhite'
              document.getElementById("myNavbar").className="w3-bar wN-black"
              document.getElementById('logoW2').className='hidden'
              document.getElementById('logoB2').className='logoWhite'
            } 
            else  {
                document.getElementById("logoIntro").className="overlay3"
                document.getElementById('logoW').className='logoWhite'
                document.getElementById('logoB').className='hidden'
                document.getElementById("myNavbar").className="w3-bar wN-white"
                document.getElementById('logoW2').className='logoWhite'
                document.getElementById('logoB2').className='hidden'
            }
        };

        return (
            <div className="w3-bar-block w3-white " id="home">
                <div className= "overlay3" ref="navbar" id="logoIntro">
                    {this.state.logo&&<img className={this.state.overlay2} src={logo} alt="" />}
                </div>
                <video className='introVideo' autoPlay loop muted>
                    <source src={this.state.video} type='video/mp4' />
                </video>
            </div>



        );
    }
}

export default withGetScreen(VideoLoop)


