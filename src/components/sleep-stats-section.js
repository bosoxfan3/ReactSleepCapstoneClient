import React from 'react';
import {connect} from 'react-redux';

import PercentageBar from './percentage-bar';
import SleepsBarChart from './sleeps-bar-chart';
import AverageHours from './average-hours';
import CaffeineChart from './caffeine-chart';
import BooleanChart from './boolean-chart';
import EveningMoodPie from './evening-mood-pie';
import MorningMoodPie from './morning-mood-pie';

import './sleep-stats-section.css';

function SleepStatsSection() {
  return (
    <div>
          <h1>Sleep Statistics</h1>
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
          <div className="col-6" id="evening-mood-pie">
            <EveningMoodPie />
          </div>
          <div className="col-6" id="morning-mood-pie">
            <MorningMoodPie />
          </div>
          </div>
  )
}

export default connect()(SleepStatsSection);