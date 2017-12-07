import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchSleepData} from '../actions/sleep-data';

import UserNav from './user-nav';


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
    console.log(this.props.protectedData);
    return (
      <div>
        <UserNav />
        <h1>'sleep data': {this.props.sleepData}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  sleepData: state.sleepData.sleeps
});

export default connect(mapStateToProps)(SleepStatsPage);