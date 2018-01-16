import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LogInPageNav from './login-page-nav';
import LogInForm from './login-form';

export function LogInPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/stats" />;
  }
  return (
    <div>
      <LogInPageNav />
      <LogInForm />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LogInPage);