import React from 'react';
import {connect} from 'react-redux';

import './landing-page-info.css';

export function LandingPageInfo() {
  return (
    <div className="landing-page-area">
      <div className="row">
        <div className="col-12">
          <section>
            <h1>Sleep App</h1>
            <h2>Find better sleep habits and improve your life</h2>
          </section>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <header>
            <h3>Purpose</h3>
          </header>
          <p>This app exists because...</p>
        </div>
        <div className="col-6">
          <p>Image of sleep clip art or something</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <header>
            <h3>How to Use</h3>
          </header>
          <p>Put in your sleep stats and we'll keep track of the rest</p>
        </div>
        <div className="col-6">
          <p>Screenshot of adding new night of sleep</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <header>
            <h3>See Your Stats</h3>
          </header>
          <p>See your stats and use them to make better choices</p>
        </div>
        <div className="col-6">
          <p>Screenshot of stats page</p>
        </div>
      </div>
    </div>        
  );
}

export default connect()(LandingPageInfo);