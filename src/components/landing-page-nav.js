import React from 'react';
import {connect} from 'react-redux';

export function LandingPageNav() {
  return (
    <header>
      <nav>
        <a href="/">SleepApp</a>
        <a href="/">About</a>
        <a href="/signup">Sign Up</a>
        <a href="/login">Log In</a>
      </nav>
    </header>
  );
}

export default connect()(LandingPageNav);