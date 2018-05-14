import React, { Component } from 'react'
import './App.css'
import logoWhite from './image/logoWhite.png'
import logoBlack from './image/logoBlack.png'
import scrollToComponent from 'react-scroll-to-component';

class Nav extends Component {
    openNav = () => {
        document.getElementById("navDemo").className = "w3-bar-block w3-white  w3-hide-large w3-hide-medium"
    }
    closeNav = () => {
        document.getElementById("navDemo").className = "w3-hide w3-bar-block w3-white  w3-hide-large w3-hide-medium"
    }
    render() {

        return (
            <div className="w3-top">
                <div className="w3-bar wN-white" id="myNavbar">
                    <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right"
                        title="Toggle Navigation Menu" onClick={this.openNav} >
                        <i className="fa fa-bars"></i>
                    </a>
                    <a  className="w3-bar-item w3-hover-red w3-button  w3-hide-small ">HOME</a>
                    <a href="https://vimeo.com/wndrs" className="w3-bar-item w3-hover-red w3-button w3-hide-large w3-hide-medium  ">


                        <img className="hidden" id="logoB2" src={logoBlack} alt={"logo"} />
                        <img className="logoWhite"  id="logoW2"src={logoWhite} alt={"logo"} />



                    </a>
                    <a href="#about" className="w3-bar-item  w3-hide-small w3-button w3-hover-red">
                        <i className="fa  "></i> ABOUT</a>


                    <a  className=" test w3-bar-item  w3-hover-red w3-button w3-hide-small" onClick={() => scrollToComponent(this., { offset: 0, align: 'top', duration: 1500})}>
                        <i className="fa "></i> VIDEO</a>
                    <a href="#web" className=" test w3-bar-item  w3-hover-red w3-button w3-hide-small">
                        <i className="fa "></i> WEB</a>
                    <a href="#portfolio" className=" test w3-bar-item  w3-hover-red w3-button w3-hide-small">
                        <i className="fa "></i> PHOTO</a>
                    <a href="#contact" className="w3-bar-item w3-button  w3-hover-red w3-hide-small">
                        <i className="fa "></i> CONTACT</a>
                    <a  className=" w3-button w3-hide-small w3-right w3-hover-red">
                        <img className="logoWhite" id="logoW" src={logoWhite} alt="logo" />
                        <img className="logoWhite hidden " id="logoB" src={logoBlack} alt="logo"/>

                    </a>

                </div>

                {/* <!-- Navbar on small screens --> */}

                <div id="navDemo" className="w3-hide w3-bar-block w3-white  w3-hide-large w3-hide-medium">
                    <a href="#about" className="w3-bar-item w3-button" onClick={this.closeNav}>ABOUT</a>
                    <a href="#video" className="w3-bar-item w3-button" onClick={this.closeNav}>VIDEO</a>
                    <a href="#web" className="w3-bar-item w3-button" onClick={this.closeNav}>WEB</a>
                    <a href="#portfolio" className="w3-bar-item w3-button" onClick={this.closeNav}>PHOTO</a>

                    <a href="#contact" className="w3-bar-item w3-button" onClick={this.closeNav}>CONTACT</a>
                </div>
            </div>
        );
    }
}

export default Nav
