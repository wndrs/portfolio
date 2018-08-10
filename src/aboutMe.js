import React, { Component } from 'react'
import './App.css'
import profile from "./image/profile.jpg";
import dessin from "./image/dessin.png";
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
import comp1 from "./image/Composition-1.gif";
import HoverImage from "react-hover-image"
import { Link } from 'react-router-dom'





class AboutMe extends Component {
  constructor() {
    super();

    this.state = {

    };
  }
  


  render() {
    return (







      <div className="w3-content w3-container w3-padding-64" id="about">
        <h3 className="w3-center">ABOUT ME</h3>
        <p className="w3-center">
          <img src={comp1} className="comp1" alt="" />

        </p>
        <p align="justify">I am a creative technologist. I use leading edge technology to execute
         creative marketing projects. I combine my   <Link to='/pawsi'><a className="w3-hover-text-black" >motion designer</a></Link> and video editor background with my programming skills, to bring
           creative ideas to life. My expertise and my passion for visual communications help me execute complete creation process, from planning to post production.
 
    </p>
        <div className="w3-row">
          <div className="w3-col m6 w3-center " >

            <br />
         {/* <img  src={profile} id="profilePic" alt=""  /> */}
<div className="profilePic">

        <HoverImage
          src={profile}
          hoverSrc={dessin}
          style={{  width: 286}}
        />
      </div>
            {/* {!this.state.imgSrc && <img  src={dessin} id="profilePic" alt=""  />} */}
          </div>

          {/* <!-- Hide this text on small devices --> */}
          <div className="w3-col m6 w3-hide-small ">
            <p align="justify">I have strong knowledge in HTML5, CSS3, Javascript. I use technologies like React.js, Angular.js, Node and Firebase to create web / mobile web app that run smoothly. I have strong skills and interest in UI/UX, and always drive my decisions to provide the best to the end users. In my spare time (beside surfing, skiing and kiting),
             I do video production under the name of <Link to='/wndrs'><a className="w3-hover-text-black" >WNDRS</a></Link> 
             with my partner Zachary Bleau. I’m currently looking for new challenges that will combine all of my skills and passions. </p>
          </div>
        </div>
        <p className="w3-large w3-center w3-padding-16">My Daily Weapons</p>

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
