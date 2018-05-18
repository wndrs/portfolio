import React, { Component } from 'react'
import './App.css'
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
import { withRouter } from "react-router-dom";


// 



class Photo extends Component {
    constructor() {
        super();

        this.state = {
            slideIndex: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20, photo21, photo22, photo23, photo24],
            modalImage: false
        };
    }

    openModal = () => { this.props.history.push("/photoGal", { photoIs: 0 }) }
    openModal1 = () => { this.props.history.push("/photoGal", { photoIs: 1 }) }
    openModal2 = () => { this.props.history.push("/photoGal", { photoIs: 2 }) }
    openModal3 = () => { this.props.history.push("/photoGal", { photoIs: 3 }) }
    openModal4 = () => { this.props.history.push("/photoGal", { photoIs: 4 }) }
    openModal5 = () => { this.props.history.push("/photoGal", { photoIs: 5 }) }
    openModal6 = () => { this.props.history.push("/photoGal", { photoIs: 6 }) }
    openModal7 = () => { this.props.history.push("/photoGal", { photoIs: 7 }) }
    openModal8 = () => { this.props.history.push("/photoGal", { photoIs: 8 }) }
    openModal9 = () => { this.props.history.push("/photoGal", { photoIs: 9 }) }
    openModal10 = () => { this.props.history.push("/photoGal", { photoIs: 10 }) }
    openModal11 = () => { this.props.history.push("/photoGal", { photoIs: 11 }) }
    openModal12 = () => { this.props.history.push("/photoGal", { photoIs: 12 }) }
    openModal13 = () => { this.props.history.push("/photoGal", { photoIs: 13 }) }
    openModal14 = () => { this.props.history.push("/photoGal", { photoIs: 14 }) }
    openModal15 = () => { this.props.history.push("/photoGal", { photoIs: 15 }) }
    openModal16 = () => { this.props.history.push("/photoGal", { photoIs: 16 }) }
    openModal17 = () => { this.props.history.push("/photoGal", { photoIs: 17 }) }
    openModal18 = () => { this.props.history.push("/photoGal", { photoIs: 18 }) }
    openModal19 = () => { this.props.history.push("/photoGal", { photoIs: 19 }) }
    openModal20 = () => { this.props.history.push("/photoGal", { photoIs: 20 }) }
    openModal21 = () => { this.props.history.push("/photoGal", { photoIs: 21 }) }
    openModal22 = () => { this.props.history.push("/photoGal", { photoIs: 22 }) }
    openModal23 = () => { this.props.history.push("/photoGal", { photoIs: 23 }) }
    openModal24 = () => { this.props.history.push("/photoGal", { photoIs: 24 }) }

    loadImage =() => {
        this.setState({moreImages:true})
    }
    loadLess =() => {
        this.setState({moreImages:false})
    }


    render() {



        return (

            <div className="w3-content w3-container w3-padding-64" id="portfolio">
                <h3 className="w3-center">MY WORK</h3>
                <p className="w3-center">
                    <em>Here are some of my latest lorem work ipsum tipsum.
                    <br /> Click on the images to make them bigger</em>
                </p>
                <br />


                <div className="w3-row w3-center">
                    <div className="w3-col s4 padding2 ">
                        <img alt="" src={this.state.slideIndex[0]} onClick={this.openModal} className="hover-shadow w3-hover-opacity cursor width100" />
                    </div>
                    <div className="w3-col s4 padding2">
                        <img alt="" src={this.state.slideIndex[1]} onClick={this.openModal1} className="hover-shadow w3-hover-opacity cursor width100" />
                    </div>
                    <div className="w3-col s4 padding2">
                        <img alt="" src={this.state.slideIndex[2]} onClick={this.openModal2} className="hover-shadow w3-hover-opacity cursor width100" />
                    </div>
                    <div className="w3-col s4 padding2">
                        <img alt="" src={this.state.slideIndex[3]} onClick={this.openModal3} className="hover-shadow w3-hover-opacity cursor width100" />
                    </div>

                  
                        <div className="w3-col s4 padding2">
                            <img alt="" src={this.state.slideIndex[4]} onClick={this.openModal4} className="hover-shadow w3-hover-opacity cursor width100" />
                        </div>
                        <div className="w3-col s4 padding2">
                            <img alt="" src={this.state.slideIndex[5]} onClick={this.openModal5} className="hover-shadow w3-hover-opacity cursor width100" />
                        </div>
                        <div className="w3-col s4 padding2">
                            <img alt="" src={this.state.slideIndex[6]} onClick={this.openModal6} className="hover-shadow w3-hover-opacity cursor width100" />
                        </div>
                        <div className="w3-col s4 padding2">
                            <img alt="" src={this.state.slideIndex[7]} onClick={this.openModal7} className="hover-shadow w3-hover-opacity cursor width100" />
                        </div>
                        <div className="w3-col s4 padding2">
                            <img alt="" src={this.state.slideIndex[8]} onClick={this.openModal8} className="hover-shadow w3-hover-opacity cursor width100" />
                        </div>
                        {this.state.moreImages &&<div>
                        <div className="w3-col s4 padding2">
                            <img alt="" src={this.state.slideIndex[9]} onClick={this.openModal9} className="hover-shadow w3-hover-opacity cursor width100" />
                        </div>
                        <div className="w3-col s4 padding2">
                            <img alt="" src={this.state.slideIndex[10]} onClick={this.openModal10} className="hover-shadow w3-hover-opacity cursor width100" />
                        </div>
                        <div className="w3-col s4 padding2">
                            <img alt="" src={this.state.slideIndex[11]} onClick={this.openModal11} className="hover-shadow w3-hover-opacity cursor width100" />
                        </div>
                    </div>}

                   {this.state.moreImages && <div className="w3-row w3-center">

                        <div className="w3-col s4 padding2 ">
                            <img alt="" src={this.state.slideIndex[12]} onClick={this.openModal12} className="hover-shadow w3-hover-opacity cursor width100" />
                        </div>
                        <div className="w3-col s4 padding2">
                            <img alt="" src={this.state.slideIndex[13]} onClick={this.openModal13} className="hover-shadow w3-hover-opacity cursor width100" />
                        </div>
                        <div className="w3-col s4 padding2">
                            <img alt="" src={this.state.slideIndex[14]} onClick={this.openModal14} className="hover-shadow w3-hover-opacity cursor width100" />
                        </div>
                        <div className="w3-col s4 padding2">
                            <img alt="" src={this.state.slideIndex[15]} onClick={this.openModal15} className="hover-shadow w3-hover-opacity cursor width100" />
                        </div>
                        <div className="w3-col s4 padding2">
                            <img alt="" src={this.state.slideIndex[16]} onClick={this.openModal16} className="hover-shadow w3-hover-opacity cursor width100" />
                        </div>
                        <div className="w3-col s4 padding2">
                            <img alt="" src={this.state.slideIndex[17]} onClick={this.openModal17} className="hover-shadow w3-hover-opacity cursor width100" />
                        </div>
                        <div className="w3-col s4 padding2">
                            <img alt="" src={this.state.slideIndex[18]} onClick={this.openModal18} className="hover-shadow w3-hover-opacity cursor width100" />
                        </div>
                        <div className="w3-col s4 padding2">
                            <img alt="" src={this.state.slideIndex[19]} onClick={this.openModal19} className="hover-shadow w3-hover-opacity cursor width100" />
                        </div>
                        <div className="w3-col s4 padding2">
                            <img alt="" src={this.state.slideIndex[20]} onClick={this.openModal20} className="hover-shadow w3-hover-opacity cursor width100" />
                        </div>
                        <div className="w3-col s4 padding2">
                            <img alt="" src={this.state.slideIndex[21]} onClick={this.openModal21} className="hover-shadow w3-hover-opacity cursor width100" />
                        </div>
                        <div className="w3-col s4 padding2">
                            <img alt="" src={this.state.slideIndex[22]} onClick={this.openModal22} className="hover-shadow w3-hover-opacity cursor width100" />
                        </div>
                        <div className="w3-col s4 padding2">
                            <img alt="" src={this.state.slideIndex[23]} onClick={this.openModal23} className="hover-shadow w3-hover-opacity cursor width100" />
                        </div>

                    </div>}
                   
                </div>
                {!this.state.moreImages && <div className="w3-center loadMore"onClick={this.loadImage}>
          
                <a className="w3-center padding1 w3-hover-red " onClick={this.loadImage}> Load more images</a>
                </div>}


                {this.state.moreImages && <div className="w3-center loadMore"onClick={this.loadLess}>
          
          <a className="w3-center padding1 w3-hover-red " onClick={this.loadLess}> Show Less</a>
          </div>}

            </div >
        );






    }
}

export default withRouter(Photo)
