import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import UserNav from './user-nav';
import MySleeps from './my-sleeps';


export function MySleepPage() {
  if (!this.props.loggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <UserNav />
      <MySleeps />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(MySleepPage);