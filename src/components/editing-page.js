import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import UserNav from './user-nav';
import EditingSection from './editing-section';

export class EditingPage extends React.Component {
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
        <EditingSection history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(EditingPage);