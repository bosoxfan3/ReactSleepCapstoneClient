import React from 'react';
import {connect} from 'react-redux';

import PercentageBar from '../stats-charts/percentage-bar';
import SleepsBarChart from '../stats-charts/sleeps-bar-chart';
import AverageHours from '../stats-charts/average-hours';
import CaffeineChart from '../stats-charts/caffeine-chart';
import BooleanChart from '../stats-charts/boolean-chart';
import EveningMoodPie from '../stats-charts/evening-mood-pie';
import MorningMoodPie from '../stats-charts/morning-mood-pie';

import './sleep-stats-section.css';

export class SleepStatsSection extends React.Component {
  render() {
    let stats;
    if (this.props.sleeps.length) {
      stats =
        <div>
          <div className="col-12" id="percentage-bar">
            <h2>Positive Wake Percentage</h2>
            <h3>Percentage of Sleeps With Waking Mood Above 5</h3>
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
            <div className="col-8" id="boolean-chart">
              <BooleanChart />
            </div>
            <div className="col-4" id="caffeine-chart">
              <CaffeineChart />
            </div>
          </div>
          <div className="col-12" id="pie-section">
            <div className="col-6" id="evening-mood-pie">
              <EveningMoodPie />
            </div>
            <div className="col-6" id="morning-mood-pie">
              <MorningMoodPie />
            </div>
          </div>
        </div>
    } else {
      stats = <p className="no-sleep">No previous nights of sleep have been recorded!</p>
    }
    return (
      <div id="stats">
        <h1>Sleep Statistics</h1>
        {stats}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sleeps: state.sleepData.sleeps
});

export default connect(mapStateToProps)(SleepStatsSection);