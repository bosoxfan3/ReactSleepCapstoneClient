import React from 'react';
import {connect} from 'react-redux';

export function LandingPageInfo() {
  return (
    <div>
      <header>
        <h1>Sleep App</h1>
        <h2>Find better sleep habits and improve your life</h2>
      </header>
      <section>
        <header>
          <h3>Purpose</h3>
        </header>
        <p>This app exists because...</p>
        <p>Image of sleep clip art or something</p>
      </section>
      <section>
        <header>
          <h3>How to Use</h3>
        </header>
        <p>Put in your sleep stats and we'll keep track of the rest</p>
        <p>Screenshot of adding new night of sleep</p>
      </section>
      <section>
        <header>
          <h3>See Your Stats</h3>
        </header>
        <p>See your stats and use them to make better choices</p>
        <p>Screenshot of stats page</p>
      </section>
    </div>        
  );
}

export default connect()(LandingPageInfo);