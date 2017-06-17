import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router-dom'

import Header from './Header.js'

import './App/App.css'

class SignUpInd extends Component {
  render() {
    return(
      <div className="signUpInd">
        <Header />
          <main>
            <div>
              <section>
                <div className="row column">
                  <h2 className="pg-spec-title">Sign Up</h2>
                </div>
              </section>
              <section>
                <div className="row">
                  <div className="small-6 columns">
                    <div id="gSignInWrapper">
                      <div id="customBtn" className="customGPlusSignIn">
                        <span className="buttonText">Sign in with Google</span>
                      </div>
                    </div>
                    <div id="name"></div>

                      <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>
                      </div>
                      <div className="small-6 columns">
                        <form className="new-member">
                          <label className="new-member" name="user-name">Name</label>
                            <input className="new-member namef" type="text" placeholder="First" />
                            <input className="new-member namel" type="text" placeholder="Last" />
                          <label className="new-member" name="user-email">Email</label>
                            <input className="new-member email" type="email" placeholder="johnnyappleseed@web.com" />
                          <label className="new-member" name="user-password">Password</label>
                            <input className="new-member password" type="password" placeholder="********" />
                          <label className="new-member" name="user-password">Confirm Password</label>
                            <input className="new-member password-confirm" type="password" placeholder="********" />
                          <Link to="/profile"><button type="submit">Submit</button></Link>
                        </form>
                      </div>
                      <div className="small-3 columns">
                      </div>
                    </div>
                  </section>
                </div>
              </main>
      </div>
    )
  }
}

export default SignUpInd
