import React from 'react';
import UserNav from './user-nav';
import MySleeps from './my-sleeps';
import {connect} from 'react-redux';

export function MySleepPage() {
  return (
    <div>
      <UserNav />
      <MySleeps />
    </div>
  );
}

export default connect()(MySleepPage);