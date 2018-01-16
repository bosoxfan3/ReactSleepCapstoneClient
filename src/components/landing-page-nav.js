import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './landing-page-nav.css';

export function LandingPageNav() {
  return (
    <header>
      <nav className="landing-page-nav">
        <div className="site-links">
          <Link className="main-link" to="/">RestFull</Link>
          <img className="logo" src="https://image.flaticon.com/icons/svg/209/209714.svg" alt="moon logo" />
          <Link className="link" to="/signup">Sign Up</Link>
          <Link className="link" to="/login">Log In</Link>
        </div>
      </nav>
    </header>
  );
}

export default connect()(LandingPageNav);