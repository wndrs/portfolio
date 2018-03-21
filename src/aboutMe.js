import React, { Component } from 'react'
import './App.css'
import profile from "./image/profile.jpg";
import ae from "./image/ae.png";
import pr from "./image/pr.png";
import lr from "./image/lr.png" ;
import ps from "./image/ps.png";
import react from "./image/react.png";
import code from "./image/code.jpeg";
import firebase from "./image/firebase.jpg";
import node_js from "./image/node_js.png";
import angular from "./image/angular.png";
import ai from "./image/ai.png";





class AboutMe extends Component {


    render() {
        return (
       






        <div className="w3-content w3-container w3-padding-64" id="about">
          <h3 className="w3-center">ABOUT ME</h3>
          <p className="w3-center">
            <em>I love photography</em>
          </p>
          <p>We have created a fictional "personal" website/blog, and our fictional character is a hobby photographer. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
    </p>
          <div className="w3-row">
            <div className="w3-col m6 w3-center ">

              <br />
              <img src={profile} id="profilePic" alt="" />
            </div>

            {/* <!-- Hide this text on small devices --> */}
            <div className="w3-col m6 w3-hide-small ">
              <p>Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat.</p>
            </div>
          </div>
          <p className="w3-large w3-center w3-padding-16">Im really good at:</p>

          <div className="w3-row-padding w3-center">
            <div className="w3-col  s3" >
              <img src={ae} className="w3-hover-opacity skills" alt="" />
            </div>
            <div className="w3-col  s3" >
              <img src={pr} className="w3-hover-opacity skills" alt="" />
            </div>
            <div className="w3-col  s3">
              <img src={lr} className="w3-hover-opacity skills" alt="" />
            </div>
            <div className="w3-col  s3">
              <img src={ps} className="w3-hover-opacity skills" alt="" />
            </div>
            <div className="w3-col s4">
              <img src={react} className="w3-hover-opacity skills" alt="" />
            </div>
            <div className="w3-col  s4">
              <img src={code} className="w3-hover-opacity skills" alt="" />
            </div>
            <div className="w3-col s4">
              <img src={firebase} className="w3-hover-opacity skills" alt="" />
            </div>
            <div className="w3-col s4">
              <img src={node_js} className="w3-hover-opacity skills" alt="" />
            </div>
            <div className="w3-col s4">
              <img src={ai} className="w3-hover-opacity skills" alt="" />
            </div>
            <div className="w3-col s4 ">
              <img src={angular} className="w3-hover-opacity skills" alt="" />
            </div>





          </div>
        </div>

     );
    }
}

export default AboutMe
