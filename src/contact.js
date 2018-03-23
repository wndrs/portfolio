import React, { Component } from 'react'
import './App.css'



class Contact extends Component {


  render() {
    return (
      <div>
        <div className="w3-hover-black marmax w3-container w3-content w3-padding-64 contactBackground" id="contact">
     

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

        
      </div>
    );
  }
}

export default Contact
