import React from 'react';
import {connect} from 'react-redux';

export function LogInPageNav() {
  return (
    <header>
      <nav>
        <a href="/">Back To Home</a>
        <a href="/">Sign Up</a>
      </nav>
    </header>
  );
}

export default connect()(LoginPageNav);