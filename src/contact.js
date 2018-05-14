import React, { Component } from 'react'
import './App.css'



class Contact extends Component {
  sendMail = () => {
    window.open('mailto:provostnoe@gmail.com')
  }

  render() {
    return (
      <div className="contact">
        {/* <div className="w3-hover-black marmax w3-container w3-content w3-padding-64 contactBackground" id="contact">
     

          <div className="w3-row w3-padding-32">
            <div className="w3-col  w3-large w3-margin-bottom">
            <h2 className="w3-wide ">NOÉ PROVOST</h2>
              <i className="fa fa-map-marker " ></i> MONTREAL, QC
                <br />
              <i className="fa fa-phone" ></i> Phone: (514) 712 0366
                <br />
              <i className="fa fa-envelope" > </i> Email: provostnoe@gmail.com
                <br />
            </div>

          </div>
        </div>

         */}


      
            <div className="w3-hover-red"><i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> MONTREAL, QC<br /></div>
            <div className="w3-hover-red"><i className="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone: (514) 712 0366<br /></div>
            <div onClick={this.sendMail} className="w3-hover-red"><i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right "></i> provostnoe@gmail.com <br/></div>
        


      </div>
    );
  }
}

export default Contact
