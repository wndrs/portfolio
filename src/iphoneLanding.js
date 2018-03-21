import React, { Component } from 'react'
import './App.css'
import './style.css';




class IphoneLanding extends Component {
    constructor() {
        super();
    
        this.state = {
          muted: false,
          source: [
            {
              src: './parallax/loop.mp4',
              type: 'video/mp4'
            }
          ]
        };
      }

    render() {
        return (
      
 

            <div className=" iphoneScreen  w3-display-container w3-opacity-min w3-hide-large w3-hide-medium">
                <div className="w3-display-middle ">


                </div>
            </div>



         
  
  
     );
    }
}

export default IphoneLanding


