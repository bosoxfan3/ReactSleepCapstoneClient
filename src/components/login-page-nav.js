import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export function LogInPageNav() {
  return (
    <header>
      <nav>
        <Link to="/">BLinkck To Home</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </header>
  );
}

export default connect()(LogInPageNav);