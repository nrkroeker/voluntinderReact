import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router-dom'

import Header from './Header.js'
import Footer from './Footer.js'

import beeHelpful from './imgs/site-assets/beeHelpful.jpg'
import dogHelp from './imgs/site-assets/dogHelp.jpg'
import helpElderly from './imgs/site-assets/helpElderly.jpg'
import helpGirlBike from './imgs/site-assets/helpGirlBike.jpg'

import './App/App.css'

class Home extends Component {
  render() {
    return(
      <div className="Home">
        <Header />

        <main>
    <div>
      <section>
        <div className="row column">
          <p className="login-signup">
            <button className="login"><Link to="/login">Log in</Link></button> or <button className="signup"><Link to="/signUpInd">Sign Up</Link></button>
          </p>
        </div>
      </section>
      <div className="row">
        <section>
          <div className="small-12 columns">
            <h3>What{"'"}s Going On in <strong>Indy</strong>?</h3>
              </div>
              <div className="small-3 columns featured-event">
                <img className="ev-img float-center" src={helpGirlBike} alt="" />
                <h4 className="ev-title">Support the City</h4>
                <p className="ev-comp">Indy Police Department</p>
                <p className="ev-date">7/11/14</p>
                <p className="ev-desc">
                Sed ut perspiciatis unde omnis iste natus error sit volup tatem accus antium doloremque omnis iste natus error sit omnis iste natus error sit...
                  <a href="#">Read More</a>
                </p>
              </div>
              <div className="small-3 columns featured-event">
                <img className="ev-img float-center" src={helpElderly} alt="" />
                <h4 className="ev-title">Senior Day</h4>
                <p className="ev-comp">TuneBridge</p>
                <p className="ev-date">03/25/11</p>
                <p className="ev-desc">
              Sed ut perspiciatis unde omnis iste natus error sit volup tatem accus antium doloremque laudantium ...
                  <a href="#">Read More</a>
                </p>
              </div>
              <div className="small-3 columns featured-event">
                <img className="ev-img float-center" src={dogHelp} alt="" />
                <h4 className="ev-title">Shelter Training</h4>
                <p className="ev-comp">Marian County Human Society</p>
                <p className="ev-date">10/01/16</p>
                <p className="ev-desc">
              Sed ut perspiciatis unde omnis iste natus error sit volup tatem accus antium...
                  <a href="#">Read More</a>
                </p>
              </div>
              <div className="small-3 columns featured-event">
                <img className="ev-img float-center" src={beeHelpful} alt="" />
                <h4 className="ev-title">Neighborly Love</h4>
                <p className="ev-comp">City of Indianapolis</p>
                <p className="ev-date">11/11/11</p>
                <p className="ev-desc">
              Sed ut perspiciatis unde omnis iste natus error sit volup tatem accus antium doloremque laudantium omnis iste natus...
                  <a href="#">Read More</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />

      </div>
    )
  }
}

export default Home
