import React, { Component } from 'react';
import './style.css';
import './App.css';
import Home from './Home.js'
import stairsmasterComp from './component/stairsmasterComp.js'
import touring from './component/touring.js'
import skate from './component/skate.js'
import pawsi from './component/pawsi.js'
import demo from './component/demo.js'
import wndrs from './component/wndrs.js'

import alibay from './component/alibay.js'
import clnr from './component/clnr.js'
import wndrsGame from './component/wndrsGame.js'
import { withRouter, Route, } from 'react-router-dom'
import { Router, Switch, } from 'react-router'



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


        <Route path='/touring' component={touring} />
        <Route path='/stairsmaster' component={stairsmasterComp} />
        <Route path='/skate' component={skate} />
        <Route path='/pawsi' component={pawsi} />
        <Route path='/demo' component={demo} />
        <Route path='/wndrs' component={wndrs} />


        <Route path='/alibay' component={alibay} />
        <Route path='/clnr' component={clnr} />
        <Route path='/wndrsGame' component={wndrsGame} />

        <Route path='/photoGal' component={photoGal} />
      </Switch>

    )
  }
}


export default App;
