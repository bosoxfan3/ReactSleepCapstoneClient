import React from 'react';
import UserNav from './user-nav';
import SleepForm from './sleep-form';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export class AddSleepPage extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
  }
  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <UserNav />
        <SleepForm history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(AddSleepPage);