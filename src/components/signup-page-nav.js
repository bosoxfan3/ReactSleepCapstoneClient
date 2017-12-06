import React from 'react';
import {connect} from 'react-redux';

export function SignUpPageNav() {
  return (
    <header>
      <nav>
        <a href="/">Back To Home</a>
        <a href="/login">Log In</a>
      </nav>
    </header>
  );
}

export default connect()(SignUpPageNav);