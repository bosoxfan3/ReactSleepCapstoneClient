import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import LandingPage from './landing-page';
import LogInPage from './login-page';
import SignUpPage from './signup-page';
import SleepStatsPage from './sleep-stats-page';
import MySleepPage from './my-sleep-page';
import AddSleepPage from './add-sleep-page';

export default function App() {
  return (
    <Router>
      <div>
        <main>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LogInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/stats" component={SleepStatsPage} />
          <Route exact path="/sleep" component={MySleepPage} />
          <Route exact path="/sleep/new" component={AddSleepPage} />
        </main>
      </div>
    </Router>
  );
}