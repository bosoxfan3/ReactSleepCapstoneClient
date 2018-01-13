import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './login-page-nav.css';

export function LogInPageNav() {
  return (
    <header>
      <nav className="login-nav">
        <div className="login-links">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/signup">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
}

export default connect()(LogInPageNav);