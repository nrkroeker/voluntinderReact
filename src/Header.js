import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, Switch } from 'react-router-dom'

import './App/App.css'

const Header = () => {
  return (
    <div className="header">
    <header>
    <h1><Link to='/event1'>volun<span className="tinder">tinder</span></Link></h1>
      <div className="row column">
        <h2 id="bigOne"></h2>
        <h2>Quickly and easily find opportunities around Indianapolis <br /> to engage in volunteerism and philanthropy.</h2>
        <div className="row">
          <p>
            <Link to="/profile"><a className="in">My Profile</a></Link>
            <Link to="/"><a className="out">Log Out</a></Link>
          </p>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header
