import React, { Component } from 'react';
import './style.css';
import './App.css';
import VideoLoop from './videoLoop.js'
import AboutMe from './aboutMe.js'
import VideoProject from './videoProject.js'
import WebProject from './webProject.js'
import Photo from './photo.js'
import Contact from './contact.js'
import ScrollUpButton from "react-scroll-up-button";
import scrollToComponent from 'react-scroll-to-component';
import logoWhite from './image/logoWhite.png'
import logoBlack from './image/logoBlack.png'
import { Link } from 'react-router-dom'


class Home extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };
  }


  // componentDidMount() {
  //   setTimeout(() => {
  //     document.getElementById("load").style.display = "none"
  //     document.getElementById("root").className = ""
  //   }, 1000);


  // }
  openNav = () => {
    if (this.state.nav === true) {
      this.closeNav();
    }
    else {
      document.getElementById("navDemo").className = "w3-bar-block w3-white  w3-hide-large w3-hide-medium"
      this.setState({ nav: true });
    }

  }
  closeNav = () => {

    document.getElementById("navDemo").className = "w3-hide w3-bar-block w3-white  w3-hide-large w3-hide-medium"
    this.setState({ nav: false });
  }



  render() {
    if (document.body.scrollTop > -1 || document.documentElement.scrollTop > -1) {

    }
    return (
      <div className="App">

        <div className="w3-top">
          <div className="w3-bar wN-white" id="myNavbar">
            <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right"
              title="Toggle Navigation Menu" onClick={this.openNav} >
              <i className="fa fa-bars"></i>
            </a>
            <a className="w3-bar-item w3-hover-red w3-button  w3-hide-small " onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 1500 })}>HOME</a>
            <div className="w3-bar-item w3-hover-red w3-button w3-hide-large w3-hide-medium  ">

              <Link to='/wndrs'>
                <img className="hidden" id="logoB2" src={logoBlack} alt={"logo"} />
                <img className="logoWhite" id="logoW2" src={logoWhite} alt={"logo"} />
              </Link >


            </div>
            <a className="w3-bar-item  w3-hide-small w3-button w3-hover-red" onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1500 })}>
              <i className="fa  "></i> ABOUT</a>

            <a className=" test w3-bar-item  w3-hover-red w3-button w3-hide-small" onClick={() => scrollToComponent(this.Web, { offset: 0, align: 'top', duration: 1500 })}>
              <i className="fa "></i> WEB</a>
            <a className=" test w3-bar-item  w3-hover-red w3-button w3-hide-small" onClick={() => scrollToComponent(this.Video, { offset: 0, align: 'top', duration: 1500 })}>
              <i className="fa "></i> VIDEO</a>
            <a className=" test w3-bar-item  w3-hover-red w3-button w3-hide-small" onClick={() => scrollToComponent(this.photo, { offset: 400, align: 'top', duration: 1500 })}>
              <i className="fa "></i> PHOTO</a>
            <a className="w3-bar-item w3-button  w3-hover-red w3-hide-small" onClick={() => scrollToComponent(this.ContactMe, { offset: 0, align: 'top', duration: 1500 })}>
              <i className="fa "></i> CONTACT</a>
            <div className=" w3-button w3-hide-small w3-right w3-hover-red">
              <Link to='/wndrs'>  <img className="logoWhite" id="logoW" src={logoWhite} alt="logo" />
                <img className="logoWhite hidden " id="logoB" src={logoBlack} alt="logo" />
              </Link >

            </div>
          </div>

          {/* <!-- Navbar on small screens --> */}

          <div id="navDemo" className="w3-hide w3-bar-block w3-white  w3-hide-large w3-hide-medium">
            <a className="w3-bar-item w3-button" onClick={() => { scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1500 }); this.closeNav() }}>ABOUT</a>
            <a className="w3-bar-item w3-button" onClick={() => { scrollToComponent(this.Web, { offset: 0, align: 'top', duration: 1500 }); this.closeNav() }}>WEB</a>
            <a className="w3-bar-item w3-button" onClick={() => { scrollToComponent(this.Video, { offset: 0, align: 'top', duration: 1500 }); this.closeNav() }}>VIDEO</a>
            <a className="w3-bar-item w3-button" onClick={() => { scrollToComponent(this.photo, { offset: 400, align: 'top', duration: 1500 }); this.closeNav() }}>PHOTO</a>
            <a className="w3-bar-item w3-button" onClick={() => { scrollToComponent(this.ContactMe, { offset: 0, align: 'top', duration: 1500 }); this.closeNav() }}>CONTACT</a>

          </div>


          {/* <!-- Navbar on small screens no-scrolling --> */}


          {/* <div id="navDemo" className="w3-hide w3-bar-block w3-white  w3-hide-large w3-hide-medium">
                    <a href="#about" className="w3-bar-item w3-button" onClick={this.closeNav}>ABOUT</a>
                    <a href="#video" className="w3-bar-item w3-button" onClick={this.closeNav}>VIDEO</a>
                    <a href="#web" className="w3-bar-item w3-button" onClick={this.closeNav}>WEB</a>
                    <a href="#portfolio" className="w3-bar-item w3-button" onClick={this.closeNav}>PHOTO</a>

                    <a href="#contact" className="w3-bar-item w3-button" onClick={this.closeNav}>CONTACT</a>
                </div> */}
        </div>

        <VideoLoop ref={(section) => { this.Home = section; }} />


        <AboutMe ref={(section) => { this.About = section; }} />

        <div className="bgimg-4 w3-display-container w3-opacity-min">
          <div className="w3-display-middle">
            <span className="w3-xxlarge w3-text-white w3-wide">WEB</span>
          </div>
        </div>

        <WebProject ref={(section) => { this.Web = section; }} />

        <div className="bgimg-2 w3-display-container w3-opacity-min">
          <div className="w3-display-middle">
            <span className="w3-xxlarge w3-text-white w3-wide">VIDEO</span>
          </div>
        </div>



        <VideoProject ref={(section) => { this.Video = section; }} />





        <div className="bgimg-3 w3-display-container w3-opacity-min" ref={(section) => { this.photo = section; }}>
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
        <div>
          <Contact ref={(section) => { this.ContactMe = section; }} />

        </div>


        <div >
          <ScrollUpButton
            StopPosition={0}
            TransitionBtnPosition={150}
            EasingType='easeOutCubic'
            AnimationDuration={2500}
            ContainerClassName='ScrollUpButton__Container'
            TransitionClassName='ScrollUpButton__Toggled'
          >
            <div className="w3-center ">
              <a className="w3-hover-red toTheTop">
                <i className="fa fa-arrow-up w3-margin-right w3-hover-red"></i>To The Top</a>
            </div>

          </ScrollUpButton>
        </div>

      </div>





    );
  }
}


export default Home;
