import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LandingPageNav from './landing-page-nav';
import LandingPageInfo from './landing-page-info';
import Footer from './footer';

export function LandingPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/stats" />;
  }
  return (
    <div>
      <LandingPageNav />
      <LandingPageInfo />
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);