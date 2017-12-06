import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import SignUpPageNav from './signup-page-nav';
import SignUpForm from './signup-form';

export function SignUpPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/stats" />;
  }
  return (
    <div>
      <SignUpPageNav />
      <SignUpForm />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignUpPage);