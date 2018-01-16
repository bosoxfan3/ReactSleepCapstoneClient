import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';

import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import Input from './form-components/input';

import './signup-form.css';

export class SignupForm extends React.Component {
  onSubmit(values) {
    const {username, password, firstName, lastName} = values;
    const user = {username, password, firstName, lastName};
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }
  render() {
    return (
      <div className="signup-background">
        <div className="row">
          <div className="col-12">
            <div className="signup-form-section">
              <form
                className="signup-form"
                onSubmit={this.props.handleSubmit(values =>
                  this.onSubmit(values)
                )}>
                <h2>Sign Up</h2>
                <label htmlFor="firstName">First name</label>
                <Field component={Input} type="text" name="firstName" />
                <label htmlFor="lastName">Last name</label>
                <Field component={Input} type="text" name="lastName" />
                <label htmlFor="username">Username</label>
                <Field
                  component={Input}
                  type="text"
                  name="username"
                  validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="password">Password</label>
                <Field
                  component={Input}
                  type="password"
                  name="password"
                  validate={[required, length({min: 5, max: 72}), isTrimmed]}
                />
                <label htmlFor="passwordConfirm">Confirm password</label>
                <Field
                  component={Input}
                  type="password"
                  name="passwordConfirm"
                  validate={[required, nonEmpty, matches('password')]}
                />
                <button
                  className="signup-button"
                  type="submit"
                  disabled={this.props.pristine || this.props.submitting}>
                    Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
    form: 'signup',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('signup', Object.keys(errors)[0]))
})(SignupForm);
