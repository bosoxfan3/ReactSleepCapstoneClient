import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export function SignUpPageNav() {
  return (
    <header>
      <nav>
        <Link to="/">Back To Home</Link>
        <Link to="/login">Log In</Link>
      </nav>
    </header>
  );
}

export default connect()(SignUpPageNav);