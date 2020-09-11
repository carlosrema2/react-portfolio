import React, { Component } from 'react';
// import react-router from 'react-router';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <Router>
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work!</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            
                <div className="row">
                 
                  <div className="columns">
                  <a href="https://carlosrema2.github.io/untitledP1/index.html">Brewery locations <img src="./images/imageBrew.jpeg" alt="portfolio" className="item-img"  /></a>
                  </div>
                  <div className="columns">
                  <a href="https://workouttraker.herokuapp.com/"> Workout Tracker<img src="./images/workout.jpg" alt="portfolio" className="item-img"  /></a>
                  </div>
                  <div className="columns">
                  <a href="https://nw-bookclub2020.github.io/FrontEnd.github.io/">The Book Club<img src="./images/thebook.jpg" alt="portfolio" className="item-img"  />(User:carlos Email:carlos@gmail.com)</a>
                  </div>
                  <div className="columns">
                  <a href="https://carlosrema2.github.io/">BootStrap Portfolio<img src="./images/notet.png" alt="portfolio" className="item-img"  /></a>
                  </div>
                  </div>
                
             
          }
          </div>
        </div>
      </div>
  </section>
  </Router>
        );
  }
}