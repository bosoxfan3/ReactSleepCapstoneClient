import React from 'react';
import {connect} from 'react-redux';

export function SignupForm() {
  return (
    <section>
      <header>
        <h3>Start Competing Now</h3>
      </header>
      <form class='signup-form'>
        <div>
          <label for="username">Email</label>
          <input type="text" name='username' id='username' />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name='password' id='password' />
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </section>
  );
}

export default connect()(SignupForm);