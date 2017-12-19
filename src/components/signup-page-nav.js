import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './signup-page-nav.css';

export function SignUpPageNav() {
  return (
    <header>
      <nav className="signup-nav">
        <div className="signup-links">
          <Link className="link" to="/">Back To Home</Link>
          <Link className="link" to="/login">Log In</Link>
        </div>
      </nav>
    </header>
  );
}

export default connect()(SignUpPageNav);