import React from 'react';
import {connect} from 'react-redux';

import './landing-page-info.css';

export function LandingPageInfo() {
  return (
    <div id="landing-page-info">
      <div className="title-area">
        <div className="row">
          <div className="col-12">
            <section className="title-section">
              <h1>RestFull</h1>
              <h2>Find Better Sleep Habits and Improve Your Life</h2>
            </section>
          </div>
        </div>
      </div>
      <div className="landing-page-section">
        <div className="row first-section">
          <div className="col-6 text-area">
            <header>
              <h2>Purpose</h2>
            </header>
            <p>
              Ever wake up one day feeling great and another feeling terrible
              and can't figure out why? RestFull will help you find
              correlations between actions, sleep quality, and mood, in turn allowing
              you to build beneficial habits!
            </p>
          </div>
          <div className="col-6 first-image">
            <img src="https://www.canlearnsociety.ca/wp-content/uploads/2017/08/how-to-sleep-better.png" alt="sleeping boy"/>
          </div>
        </div>
      </div>
      <div className="landing-page-section">
        <div className="row second-section">
          <div className="col-6 second-image">
            <img className="form-screenshot" src={require("../../screenshots/1.png")} alt="Screenshot of sleep form page"/>
          </div>
          <div className="col-6 text-area second-text-area">
            <header>
              <h2>How to Use RestFull</h2>
            </header>
            <p>
              Fill out our form with details about your sleep from the basics (bed time, wake time),
              to answering questions such as whether you were exposed to light from a screen before sleeping
              or rating your mood at bed time.
            </p>
          </div>
        </div>
      </div>
      <div className="landing-page-section">
        <div className="row third-section">
          <div className="col-6 text-area third-text-area">
            <header>
              <h2>See Your Stats</h2>
            </header>
            <p>
              The data from your sleep submissions is then displayed, allowing you to
              find direct correlations between your habits and your sleep and overall well-being!
            </p>
          </div>
          <div className="col-6 third-image">
            <img className="stats-screenshot" src={require("../../screenshots/3.png")} alt="Screenshot of sleep stats page" />
          </div>
        </div>
      </div>
    </div>     
  );
}

export default connect()(LandingPageInfo);