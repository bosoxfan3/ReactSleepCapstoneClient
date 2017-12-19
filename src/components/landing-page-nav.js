import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './landing-page-nav.css';

export function LandingPageNav() {
  return (
    <header>
      <nav className="landing-page-nav">
        <div className="site-links">
          <Link className="link" to="/">SleepApp</Link>
          <Link className="link" to="/">About</Link>
          <Link className="link" to="/signup">Sign Up</Link>
          <Link className="link" to="/login">Log In</Link>
        </div>
      </nav>
    </header>
  );
}

export default connect()(LandingPageNav);