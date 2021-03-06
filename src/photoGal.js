import React, { Component } from 'react'
import './App.css'
import { withRouter } from 'react-router-dom'
import './photoGallery.css'
import photo1 from "./photo/1a.jpeg"
import photo2 from "./photo/2a.jpeg"
import photo3 from "./photo/3a.jpeg"
import photo4 from "./photo/4a.jpeg"
import photo5 from "./photo/5a.jpg"
import photo6 from "./photo/6a.jpg"
import photo7 from "./photo/7a.jpg"
import photo8 from "./photo/8a.jpg"
import photo9 from "./photo/9a.jpg"
import photo10 from "./photo/10a.jpg"
import photo11 from "./photo/11a.jpg"
import photo12 from "./photo/12a.jpg"
import photo13 from "./photo/13a.jpeg"
import photo14 from "./photo/14a.jpg"
import photo15 from "./photo/15a.jpg"
import photo16 from "./photo/16a.jpg"
import photo17 from "./photo/17a.jpg"
import photo18 from "./photo/18a.jpg"
import photo19 from "./photo/19.jpg"
import photo20 from "./photo/20.jpeg"
import photo21 from "./photo/21.jpg"
import photo22 from "./photo/22.jpg"
import photo23 from "./photo/23.jpg"
import photo24 from "./photo/24.jpg"


class photoGal extends Component {
  constructor() {
    super();

    this.state = {
        slideIndex: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20, photo21, photo22, photo23, photo24],
    };
  }
  componentDidMount() {

    this.setState({ photoNum: 1 })
  }
   

    closeModal = () => {
        this.props.history.push("/")

    }
    plusSlides = () => {
        if (this.state.photoNum < this.state.slideIndex.length - 1)
            this.setState({ photoNum: this.state.photoNum + 1 })
        else {
            this.setState({ photoNum: 0 })
        }
    }

    MoinSlide = () => {
        if (this.state.photoNum > 0)
            this.setState({ photoNum: this.state.photoNum - 1 })
        else {
            this.setState({ photoNum: this.state.slideIndex.length - 1 })
        }
    }
   
  render() {

      return (
        <div id="myModal" className="modal">
        <span className="close cursor" onClick={this.closeModal}>&times;</span>
        <div className="modal-content">

            <div className="mySlides">
                <div className="numbertext">{this.state.photoNum + 1} / {this.state.slideIndex.length}</div>
                <img alt="" src={this.state.slideIndex[this.state.photoNum]} className="width100" />
            </div>


            <a className="prev" onClick={this.MoinSlide}>&#10094;</a>
            <a className="next" onClick={this.plusSlides}>&#10095;</a>

        </div>

    </div>


      )
   
  }
}

export default withRouter(photoGal)