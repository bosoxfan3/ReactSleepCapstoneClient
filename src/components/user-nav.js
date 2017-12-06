import React from 'react';
import {connect} from 'react-redux';

export function UserNav() {
  return (
    <header>
      <nav>
        <a href="/stats">Sleep Stats</a>
        <a href="/sleep">My Sleep</a>
        <a href="/add-sleep">Add Sleep</a>
        <button href="/logout">Log Out</button>
      </nav>
    </header>
  );
}

export default connect()(UserNav);