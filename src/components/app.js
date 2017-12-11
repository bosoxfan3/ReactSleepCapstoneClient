import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import LandingPage from './landing-page';
import LogInPage from './login-page';
import SignUpPage from './signup-page';
import SleepStatsPage from './sleep-stats-page';
import MySleepPage from './my-sleep-page';
import AddSleepPage from './add-sleep-page';
import EditingPage from './editing-page';

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
  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }
    clearInterval(this.refreshInterval);
  }
  render() {
    return (
        <div>
          <main>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/stats" component={SleepStatsPage} />
            <Route exact path="/sleeps" component={MySleepPage} />
            <Route exact path="/sleeps/add/new" component={AddSleepPage} />
            <Route exact path="/sleeps/:date" component={EditingPage} />
          </main>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

//it wouldn't render without this withRouter function. curric says it
//is to deal with 'update blocking'
export default withRouter(connect(mapStateToProps)(App));