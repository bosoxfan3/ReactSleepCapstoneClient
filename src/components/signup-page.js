import React from 'react';
import SignUpPageNav from './signup-page-nav';
import SignUpForm from './signup-form';
import {connect} from 'react-redux';

export function SignUpPage() {
  return (
    <div>
      <SignUpPageNav />
      <SignUpForm />
    </div>
  );
}

export default connect()(SignUpPage);