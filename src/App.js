import React, { Component } from 'react';
import './style.css';
import './App.css';
import Nav from './nav.js'
import VideoLoop from './videoLoop.js'
import AboutMe from './aboutMe.js'
import VideoProject from './videoProject.js'
import WebProject from './webProject.js'
import Photo from './photo.js'
import Contact from './contact.js'
import ScrollUpButton from "react-scroll-up-button";

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };
  }


  componentDidMount() {
    setTimeout(() => {
      document.getElementById("load").style.display = "none"
      document.getElementById("root").className = ""
    }, 1000);


  }

  render() {
    if (document.body.scrollTop > -1 || document.documentElement.scrollTop > -1) {
      console.log("caca")
    }
    return (
      <div className="App">

        <Nav />
        <VideoLoop  />
        <AboutMe ref="sec2" />


        <div className="bgimg-2 w3-display-container w3-opacity-min">
          <div className="w3-display-middle">
            <span className="w3-xxlarge w3-text-white w3-wide">VIDEO</span>
          </div>
        </div>



        <VideoProject />


        <div className="bgimg-4 w3-display-container w3-opacity-min">
          <div className="w3-display-middle">
            <span className="w3-xxlarge w3-text-white w3-wide">WEB</span>
          </div>
        </div>

        <WebProject />


        <div className="bgimg-3 w3-display-container w3-opacity-min">
          <div className="w3-display-middle">
            <span className="w3-xxlarge w3-text-white w3-wide">PHOTO</span>
          </div>
        </div>
        <Photo />
        <div className="bgimg-5 w3-display-container w3-opacity-min ">
          <div className="w3-display-middle">
            <span className="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
          </div>
        </div>

        <Contact />



    
           <div>
           <ScrollUpButton
      StopPosition={0}
      TransitionBtnPosition={150}
      EasingType='easeOutCubic'
      AnimationDuration={2500}
      ContainerClassName='ScrollUpButton__Container'
      TransitionClassName='ScrollUpButton__Toggled'
    >
           <div className="w3-center">
          <a  className="w3-button">
            <i className="fa fa-arrow-up w3-margin-right"></i>To The Top</a>
        </div>

           </ScrollUpButton>
       </div>

</div>





    );
  }
}


export default App;
