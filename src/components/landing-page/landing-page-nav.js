import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {login} from '../../actions/auth';

import './landing-page-nav.css';

export class LandingPageNav extends React.Component {
  logInDemoAccount() {
    return this.props.dispatch(login('daniel', '12345'));
  }
  render() {
    return (
      <header>
        <nav className="landing-page-nav">
          <Link className="main-link" to="/">RestFull</Link>
          <img className="logo" src="https://image.flaticon.com/icons/svg/209/209714.svg" alt="moon logo" />
          <div className="login-signup-links">
            <Link className="link" to="/signup">Sign Up</Link>
            <Link className="link" to="/login">Log In</Link>
            <a id="demo-link" className="link" onClick={() => this.logInDemoAccount()}>Demo</a>
          </div>
        </nav>
      </header>
    );
  }
}

export default connect()(LandingPageNav);