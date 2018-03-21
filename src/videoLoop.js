import React, { Component } from 'react'
import './App.css'
import './style.css';
import loopVideo from './parallax/loop.mp4';
import loopVideoMobile from './parallax/loopMobile.mp4';
import {withGetScreen} from 'react-getscreen'

class VideoLoop extends Component {
    constructor() {
        super();
    
        this.state = {
          muted: false,
             };
      }
componentWillMount(){
    if (this.props.isMobile()){
        this.setState({  video : loopVideoMobile

        })

    }
    else {
      
        this.setState({  video : loopVideo

      })
    }
        

}
    render() {
       
        
        return (
                 <div className="w3-bar-block w3-white ">
                <div className="overlay3" id="logoIntro">
                    <img className="overlay2" src="./parallax/logo.png" alt="" />
                </div>
                <video className='introVideo' autoPlay loop muted>
                    <source src={this.state.video} type='video/mp4' />
                </video>
            </div>
  
         
  
     );
    }
}

export default withGetScreen(VideoLoop)


