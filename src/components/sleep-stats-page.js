import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchSleepData} from '../actions/sleep-data';

import UserNav from './user-nav';
import SleepStatsSection from './sleep-stats-section';

import './sleep-stats-page.css';

//necessary for the graphs
import '../../node_modules/nvd3/build/nv.d3.min.css';

export class SleepStatsPage extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
    this.props.dispatch(fetchSleepData());
  }
  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className="stats-page-background">
        <UserNav />
        <div className="row">
          <div className="col-12 stats-background">
            <SleepStatsSection />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  sleepData: state.sleepData.sleeps
});

export default connect(mapStateToProps)(SleepStatsPage);