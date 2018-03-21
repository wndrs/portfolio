import React, { Component } from 'react'
import './App.css'
import touring from "./video/touring.jpg"
import stairsmaster from "./video/stairsmaster.jpg"
import skate from "./video/skate.jpg"
import pawsi from "./video/pawsi.jpg"
import demo from "./video/demo.jpg"



class VideoProject extends Component {


    render() {
        return (
            <div className="w3-content  w3-padding-64 padding5" id="video">
              <h3 className="w3-center">MY WORK</h3>
              <p className="w3-center">
                <em>Here are some of my latest lorem work ipsum tipsum.
                <br/>Click on the images to make them bigger</em>
              </p>
          
              
              <div className="w3-row w3-center">
          
          
          
           
                <div className="w3-col s6 padding1">
                  <img alt="" src={touring}  className="w3-hover-opacity width100"/>
          
                </div>
                <div className="w3-col s6 padding1">
                  <img alt="" src={stairsmaster}  className="w3-hover-opacity width100"/>
          
                </div>
                <div className="w3-col s6 padding1">
                  <img alt="" src={skate}  className="w3-hover-opacity width100"/>
          
                </div>
                <div className="w3-col s6 padding1">
                  <img alt="" src={pawsi}  className="w3-hover-opacity width100"/>
          
                </div>
                <div className="w3-col s0 padding1">
                  <img alt="" src={demo}  className="w3-hover-opacity width100"/>
          
                </div>
               
              </div>
          
            </div>
     );
    }
}

export default VideoProject
