import React, { Component } from 'react'
import './App.css'
import logoWhite from './image/logoWhite.png'


class Nav extends Component {


    render() {
        return (
        <div className="w3-top">
            <div className="w3-bar wN-white" id="myNavbar">
                <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right"
                    title="Toggle Navigation Menu">
                    <i className="fa fa-bars"></i>
                </a>
                <a href="#home" className="w3-bar-item w3-hover-red w3-button  w3-hide-small ">HOME</a>
                <a href="https://vimeo.com/wndrs" className="w3-bar-item w3-hover-red w3-button w3-hide-large w3-hide-medium  ">


                    <img className="logoWhite" src={logoWhite} alt={"logo"}/> 



                </a>
                <a href="#about" className="w3-bar-item  w3-hide-small w3-button w3-hover-red">
                    <i className="fa  "></i> ABOUT</a>


                <a href="#video" className=" test w3-bar-item  w3-hover-red w3-button w3-hide-small">
                    <i className="fa "></i> VIDEO</a>
                <a href="#web" className=" test w3-bar-item  w3-hover-red w3-button w3-hide-small">
                    <i className="fa "></i> WEB</a>
                <a href="#portfolio" className=" test w3-bar-item  w3-hover-red w3-button w3-hide-small">
                    <i className="fa "></i> PHOTO</a>
                <a href="#contact" className="w3-bar-item w3-button  w3-hover-red w3-hide-small">
                    <i className="fa "></i> CONTACT</a>
                <a href="https://vimeo.com/wndrs" className=" w3-button w3-hide-small w3-right w3-hover-red">
                <img className="logoWhite" src={logoWhite} alt={"logo"}/> 

                </a>

            </div>

            {/* <!-- Navbar on small screens --> */}
            <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
                <a href="#about" className="w3-bar-item w3-button" >ABOUT</a>
                <a href="#video" className="w3-bar-item w3-button" >VIDEO</a>
                <a href="#web" className="w3-bar-item w3-button" >WEB</a>
                <a href="#portfolio" className="w3-bar-item w3-button">PHOTO</a>

                <a href="#contact" className="w3-bar-item w3-button" >CONTACT</a>
            </div>
        </div>
     );
    }
}

export default Nav
