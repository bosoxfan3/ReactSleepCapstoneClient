import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {setCurrentUser, setAuthToken} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';

import './user-nav.css';

export class UserNav extends React.Component {
  logOut() {
    this.props.dispatch(setCurrentUser(null));
    this.props.dispatch(setAuthToken(null));
    clearAuthToken();
  }
  render() {
    return (
      <header>
        <nav className="user-nav">
          <div className="site-links">
            <Link className="link" to="/stats">Sleep Stats</Link>
            <Link className="link" to="/sleeps">My Sleeps</Link>
            <Link className="link" to="/sleeps/add/new">Add Sleep</Link>
          </div>
          <a className="log-out-button" onClick={() => this.logOut()}>Log Out</a>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(UserNav);