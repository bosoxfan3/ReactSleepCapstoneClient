import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchSleepData} from '../actions/sleep-data';

import UserNav from './user-nav';
import PercentageBar from './percentage-bar';
import SleepsBar from './sleeps-bar';

import './sleep-stats-page.css';


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
    let totalSleeps = this.props.sleepData.length;
    let positiveMornings = 0;
    let negativeMornings = 0;
    for (let i=0; i<this.props.sleepData.length; i++) {
      if (this.props.sleepData[i].moodAtWake < 6) {
        negativeMornings++
      } else {
        positiveMornings++
      }
    }
    let positivePercentage = (positiveMornings / totalSleeps)*100+'%';
    let negativePercentage = (negativeMornings / totalSleeps)*100+'%';
    return (
      <div>
        <UserNav />
        <div className="percentage-bar">
          <PercentageBar />
        </div>
        <div className="sleeps-bar">
          <SleepsBar />
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