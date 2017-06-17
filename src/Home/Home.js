import React, { Component } from 'react'

import Header from '../Header/Header.js'

import placeHolder from '../imgs/site-assets/placeholder.png'

import './Home.css'

class Home extends Component {
  render() {
    return(
      <div className="Home">
        <Header />

        <section>
          <div className="row column">
            <p className="login-signup">
            <button className="login">Log in</button> or <button className="signup">Sign Up</button>
            </p>
          </div>
        </section>
          <div className="row">
          <section>
            <div className="small-12 columns">
              <h3>What&#39;s Going On in <strong>Indy</strong>?</h3>
            </div>
            <div className="small-3 columns featured-event">
              <img className="ev-img float-center" src={placeHolder} alt="placeHolder" />
              <h4 className="ev-title">Event</h4>
              <p className="ev-comp">Company</p>
              <p className="ev-date">11/11/11</p>
              <p className="ev-desc">
                Sed ut perspiciatis unde omnis iste natus error sit volup tatem accus antium doloremque laudantium, totam rem aperiam, eaque ip sa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo... <a href="">Read More</a>
              </p>
            </div>
            <div className="small-3 columns featured-event">
              <img className="ev-img float-center" src={placeHolder} alt="placeHolder" />
              <h4 className="ev-title">Event</h4>
              <p className="ev-comp">Company</p>
              <p className="ev-date">11/11/11</p>
              <p className="ev-desc">
                Sed ut perspiciatis unde omnis iste natus error sit volup tatem accus antium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo... <a href="">Read More</a>
              </p>
            </div>
            <div className="small-3 columns featured-event">
              <img className="ev-img float-center" src={placeHolder} alt="placeHolder" />
              <h4 className="ev-title">Event</h4>
              <p className="ev-comp">Company</p>
              <p className="ev-date">11/11/11</p>
              <p className="ev-desc">
                Sed ut perspiciatis unde omnis iste natus error sit volup tatem accus antium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo... <a href="">Read More</a>
              </p>
            </div>
            <div className="small-3 columns featured-event">
              <img className="ev-img float-center" src={placeHolder} alt="placeHolder" />
              <h4 className="ev-title">Event</h4>
              <p className="ev-comp">Company</p>
              <p className="ev-date">11/11/11</p>
              <p className="ev-desc">
                Sed ut perspiciatis unde omnis iste natus error sit volup tatem accus antium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo... <a href="">Read More</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Home
