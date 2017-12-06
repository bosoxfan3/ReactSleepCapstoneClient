import React from 'react';
import LogInPageNav from './login-page-nav';
import LogInForm from './login-form';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

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