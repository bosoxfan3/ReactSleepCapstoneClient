import React from 'react';
import {connect} from 'react-redux';

export function LandingPageNav() {
  return (
    <header>
      <nav>
        <a href="/">SleepApp</a>
        <a href="/">About</a>
        <a href="/">Sign Up</a>
        <button href="/login">Log In</button>
      </nav>
    </header>
  );
}

export default connect()(LandingPageNav);