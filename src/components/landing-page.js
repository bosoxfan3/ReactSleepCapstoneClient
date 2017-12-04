import React from 'react';
import LandingPageNav from './landing-page-nav';
import LandingPageInfo from './landing-page-info';
import SignUpForm from './signup-form';
import Footer from './footer';
import {connect} from 'react-redux';

export function LandingPage() {
  return (
    <div>
      <LandingPageNav />
      <LandingPageInfo />
      <SignUpForm />
      <Footer />
    </div>
  );
}

export default connect()(LandingPage);