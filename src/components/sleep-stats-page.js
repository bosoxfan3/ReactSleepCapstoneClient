import React from 'react';
import UserNav from './user-nav';
import {connect} from 'react-redux';

export function SleepStatsPage() {
  return (
    <div>
      <UserNav />
      <h1>Stats will go here</h1>
    </div>
  );
}

export default connect()(SleepStatsPage);