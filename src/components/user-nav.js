import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser, setAuthToken} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link} from 'react-router-dom';

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
          <Link to="/stats">Sleep Stats</Link>
          <Link to="/sleeps">My Sleeps</Link>
          <Link to="/sleeps/add/new">Add Sleep</Link>
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