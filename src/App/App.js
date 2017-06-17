import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, Switch } from 'react-router-dom'
import './App.css'

import Home from '../Home.js'
import Login from '../Login.js'
import SignUpInd from '../SignUpInd.js'
import Profile from '../Profile.js'
import Event1 from '../Event1.js'
import Event4 from '../Event4.js'
import Event12 from '../Event12.js'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />

        <Route path='/login' component={Login} />

        <Route path='/signUpInd' component={SignUpInd} />

        <Route path='/profile' component={Profile} />

        <Route path='/event12' component={Event12} />

        <Route path='/event4' component={Event4} />

        <Route path='/event1' component={Event1} />

      </Switch>
    )
  }
}

export default App;
