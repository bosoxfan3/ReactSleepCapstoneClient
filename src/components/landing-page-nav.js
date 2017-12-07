import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export function LandingPageNav() {
  return (
    <header>
      <nav>
        <Link to="/">SleepApp</Link>
        <Link to="/">About</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </nav>
    </header>
  );
}

export default connect()(LandingPageNav);