import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser, setAuthToken} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class UserNav extends React.Component {
  logOut() {
    this.props.dispatch(setCurrentUser(null));
    this.props.dispatch(setAuthToken(null));
    clearAuthToken();
  };
  render() {
    return (
      <header>
        <nav>
          <a href="/stats">Sleep Stats</a>
          <a href="/sleep">My Sleep</a>
          <a href="/add-sleep">Add Sleep</a>
          <button onClick={() => this.logOut()}>Log Out</button>
        </nav>
      </header>
    );
  };
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(UserNav);