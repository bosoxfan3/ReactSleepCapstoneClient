import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchSleepData} from '../actions/sleep-data';

import UserNav from './user-nav';
import SleepStatsSection from './sleep-stats-section';

import './sleep-stats-page.css';
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

          /* <h1>Sleep Statistics</h1>
          <div className="col-12" id="percentage-bar">
            <h2>Waking Mood Percentage</h2>
            <h3>Sleep % Above 5 Waking Mood</h3>
            <PercentageBar />
          </div>
          <div className="col-12" id="hours-section">
            <div className="col-9" id="sleeps-bar-chart">
              <SleepsBarChart />
            </div>
            <div className="col-3" id="average-hours">
              <AverageHours />
            </div>
          </div>
          <div className="col-12" id="chart-section">
            <div className="col-4" id="caffeine-chart">
              <CaffeineChart />
            </div>
            <div className="col-8" id="exercise-chart">
              <ExerciseChart />
            </div>
          </div>
          <div className="col-6" id="evening-mood-pie">
            <EveningMoodPie />
          </div>
          <div className="col-6" id="morning-mood-pie">
            <MorningMoodPie />
          </div> */