import React, { Component } from 'react'
import './App.css'
import profile from "./image/profile.jpg";
import ae from "./image/ae.png";
import pr from "./image/pr.png";
import lr from "./image/lr.png";
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
          <em>Part time everything</em>
        </p>
        <p align="justify">Study mechanical engineering and loved it, but decided to take a big turn and do what i love the most “film and edit sick movies”. 
          Turns out i was pretty good on my computer so i quickly end up learning motion design and coding. I’m now working as a motion designer / web developer on contact basis <a className="clickme" href="https://www.w3schools.com/html/">see my C.V.</a>  In my spare time (beside surfing, skiing and kiting), i do vidéo 
          under the name of WNDRS with my partner Zachary Bleau.
    </p>
        <div className="w3-row">
          <div className="w3-col m6 w3-center ">

            <br />
            <img src={profile} id="profilePic" alt="" />
          </div>

          {/* <!-- Hide this text on small devices --> */}
          <div className="w3-col m6 w3-hide-small ">
            <p align="justify">WNDRS stands for wanderers. A wanderer is a person who rather travels around  than settling down in one place. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat. </p>
          </div>
        </div>
        <p className="w3-large w3-center w3-padding-16">My Daily Weapon:</p>

        <div className="w3-row-padding w3-center">
          <div className="w3-col  s3" >
            <img src={ae} className=" skills" alt="" />
          </div>
          <div className="w3-col  s3" >
            <img src={pr} className="skills" alt="" />
          </div>
          <div className="w3-col  s3">
            <img src={lr} className=" skills" alt="" />
          </div>
          <div className="w3-col  s3">
            <img src={ps} className="skills" alt="" />
          </div>
          <div className="w3-col s4">
            <img src={react} className="skills" alt="" />
          </div>
          <div className="w3-col  s4">
            <img src={code} className=" skills" alt="" />
          </div>
          <div className="w3-col s4">
            <img src={firebase} className="skills" alt="" />
          </div>
          <div className="w3-col s4">
            <img src={node_js} className="skills" alt="" />
          </div>
          <div className="w3-col s4">
            <img src={ai} className="skills" alt="" />
          </div>
          <div className="w3-col s4 ">
            <img src={angular} className="skills" alt="" />
          </div>





        </div>
      </div>

    );
  }
}

export default AboutMe
