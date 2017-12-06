import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchProtectedData} from '../actions/protected-data';
//this will become a fetch sleep data or some other sort of action later

import UserNav from './user-nav';


export class SleepStatsPage extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
    this.props.dispatch(fetchProtectedData());
  }
  render() {
    return (
      <div>
        <UserNav />
        <h1>'protected data': {this.props.protectedData}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  protectedData: state.protectedData.data
};

export default connect(mapStateToProps)(SleepStatsPage);