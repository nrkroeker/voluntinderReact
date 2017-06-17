import React, { Component } from 'react'

import Header from './Header.js'
import Footer from './Footer.js'

import placeHolder from './imgs/site-assets/placeholder.png'

import './App/App.css'

class Profile extends Component {
  render() {
    return (
      <div className="profile">
      <Header />
          <main>
      <div className="resize">
        <section>
          <div className="row column">
            <h2 className="pg-spec-title">Your Name</h2>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="small-6 columns">
              <div className="row column">
                <img src={placeHolder} />
                <div className="row column">
                  <p>
                  Hello world I like eating things.
                  </p>
                </div>
              </div>
            </div>
            <div className="small-6 columns">
              <form className="member">
                <button className="float-right" type="submit">Edit</button>
                <label className="new-member" name="user-name">Name</label>
                <input className="new-member namef" type="text" defaultValue="Martin" readOnly/>
                <input className="new-member namel" type="text" defaultValue="Mammoth" readOnly/>
                <label className="member" name="user-email">Email</label>
                <input className="member email" type="email" defaultValue="teammammoth@gmail.com" readOnly/>
                <label className="member" name="user-password">Password</label>
                <input className="member password" type="password" defaultValue="password" readOnly/>
              </form>
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

export default Profile
