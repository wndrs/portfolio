import React, { Component } from 'react';
import './style.css';
import './App.css';
import Home from './Home.js'
import stairsmasterComp from './stairsmasterComp.js'
import { withRouter,Route, } from 'react-router-dom'
import { Router,  Switch,} from 'react-router'



import { BrowserRouter, } from 'react-router-dom'
import photoGal from './photoGal.js';



class App extends Component {
  constructor() {
    super();

    this.state = {
      curentVuePath: "home"
    };
  }

  
  componentDidMount() {
    setTimeout(() => {
      document.getElementById("load").style.display = "none"
      document.getElementById("root").className = ""
      
    }, 2000);

  }





  render() {
    return (
    
      <Switch>
     
       
       <Route exact path='/' component={Home} />
       <Route path='/stairsmasterComp' component={stairsmasterComp}  />
       <Route path='/photoGal' component={photoGal}  />
        </Switch>

    )
  }
}


export default App;
