import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import LandingPage from './landing-page/landing-page';
import LogInPage from './login-page/login-page';
import SignUpPage from './signup-page/signup-page';
import SleepStatsPage from './sleep-pages/sleep-stats-page';
import MySleepPage from './sleep-pages/my-sleep-page';
import AddSleepPage from './sleep-pages/add-sleep-page';
import EditingPage from './sleep-pages/editing-page';

import {refreshAuthToken} from '../actions/auth';

export class App extends React.Component {
  componentDidMount() {
    if (this.props.hasAuthToken) {
      this.props.dispatch(refreshAuthToken());
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && !this.props.loggedIn) {
      this.startPeriodicRefresh();
    } else if (!nextProps.loggedIn && this.props.loggedIn) {
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
          <Route exact path="/sleeps/:id" component={EditingPage} />
          <Route exact path="/sleeps" component={MySleepPage} />
          <Route exact path="/sleeps/add/new" component={AddSleepPage} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));