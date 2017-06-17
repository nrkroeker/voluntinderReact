import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, Switch } from 'react-router-dom'
import './App.css'

import Home from '../Home.js'
import Login from '../Login.js'
import SignUpInd from '../SignUpInd.js'
import Profile from '../Profile.js'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />

        <Route path='/login' component={Login} />

        <Route path='/signUpInd' component={SignUpInd} />

        <Route path="/profile" component={Profile} />
      </Switch>
    )
  }
}

export default App;
