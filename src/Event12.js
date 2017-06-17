import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, Switch } from 'react-router-dom'

import Header from './Header.js'
import Footer from './Footer.js'

import image from './imgs/site-assets/blanketmaking.jpg'
import left from './imgs/Icons/smallArrowLeftIcon.png'
import right from './imgs/Icons/smallArrowRightIcon.png'

import './App/App.css'

class Event12 extends Component {
  render() {
    return(
      <div className="event12">
      <Header />
      <main>
    <div>
    <section>
        <div className="row column">
            <h2 className="pg-spec-title">Current Events</h2>
        </div>
    </section>
    <section>
        <div className="row">
            <div className="small-1 columns">
                <Link to="/event1"><img className="arrow" src={left} alt="next" /></Link>
            </div>
            <div className="small-10 columns">
                <img className="ev-img big float-center" src={image} alt="" />
                <h4 className="ev-title big">Blanket Making for the Homeless</h4>
                <p className="ev-comp big">Habitat for Humanity</p>
                <p className="ev-date big">6/30/17</p>
                <p className="ev-desc big">
                    Sed ut perspiciatis unde omnis iste natus error sit volup tatem accus antium doloremque laudantium omnis iste natus error
                    sit omnis iste natus error sit At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                    sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor repellendus. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                    sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>
                <button className="signup">Sign Me Up!</button>  <button className="save float-right">Save for Later</button>
            </div>
            <div className="small-1 columns">
                <Link to="/event4"><img className="arrow" src={right} alt="next" /></Link>
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

export default Event12
