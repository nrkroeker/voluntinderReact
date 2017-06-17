import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, Switch } from 'react-router-dom'

import Header from './Header.js'
import Footer from './Footer.js'

import './App/App.css'

class Login extends Component {
  render() {
    return(
      <div className="login">
      <Header />
      <main>
  <div>
<section>
  <div className="row column">
      <h2 className="pg-spec-title">Log In</h2>
  </div>
</section>
<section>
  <div className="row">
      <div className="small-6 columns small-centered">
          <form id="loginForm">

              <label htmlFor="email">Email: </label>
              <input type="text" name="email" placeholder="Email" />

              <label htmlFor="password">Password: </label>
              <input type="password" name="password" placeholder="Password" />

              <input type="checkbox" name="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>

              <Link to="/profile"><button type="submit" className="logInButton">Log In</button></Link>

          </form>
      </div>
      <div className="small-6 columns">

      </div>
      <div className="small-3 columns">
      </div>
  </div>
</section>
  </div>
</main>
<Footer />
      </div>
    )
  }
}

export default Login
