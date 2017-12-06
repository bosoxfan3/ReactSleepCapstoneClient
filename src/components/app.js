import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import LandingPage from './landing-page';
import LogInPage from './login-page';
import SignUpPage from './signup-page';
import SleepStatsPage from './sleep-stats-page';
import MySleepPage from './my-sleep-page';
import AddSleepPage from './add-sleep-page';

import {refreshAuthToken} from '../actions/auth';

export class App extends React.Component {
  componentDidMount() {
    if (this.props.hasAuthToken) {
      // Try to get a fresh auth token if we had an existing one in
      // localStorage
      this.props.dispatch(refreshAuthToken());
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && !this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (!nextProps.loggedIn && this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }
  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }
  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 //one hour
    );
  }
  stopPeriodRefresh() {
    if (!this.refreshInterval) {
      return;
    }
    clearInterval(this.refreshInterval);
  }
  render() {
    return (
      <Router>
        <div>
          <main>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/stats" component={SleepStatsPage} />
            <Route exact path="/sleep" component={MySleepPage} />
            <Route exact path="/add-sleep" component={AddSleepPage} />
          </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(App);

//curric had something called dealing with update blocking
//imported {withRouter} from 'react-router-dom'
//then did export default withRouter(connect(mapStateToProps)(App))