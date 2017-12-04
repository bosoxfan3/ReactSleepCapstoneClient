import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './landing-page';
import LoginPage from './login-page';
import SleepStatsPage from './sleep-stats-page';
import MySleepPage from './my-sleep-page';
import AddSleepPage from './add-sleep-page';

export default function App() {
  return (
    <Router>
      <div>
        <main>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/stats" component={SleepStatsPage} />
          <Route exact path="/sleep" component={MySleepPage} />
          <Route exact path="/sleep/new" component={AddSleepPage} />
        </main>
      </div>
    </Router>
  );
}