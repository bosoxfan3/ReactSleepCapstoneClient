import React from 'react';
import {connect} from 'react-redux';

export function LogInForm() {
  return (
    <section>
      <form id="login-form">
        <div>
          <label for="username">Email</label>
          <input type="text" name='username' id='username' />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name='password' id='password' />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default connect()(LogInForm);