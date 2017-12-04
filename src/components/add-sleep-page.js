import React from 'react';
import UserNav from './user-nav';
import SleepForm from './sleep-form';
import {connect} from 'react-redux';

export function AddSleepPage() {
  return (
    <div>
      <UserNav />
      <SleepForm />
    </div>
  );
}

export default connect()(AddSleepPage);