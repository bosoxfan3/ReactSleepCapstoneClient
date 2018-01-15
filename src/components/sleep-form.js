import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required} from '../validators'
import {postSleepData} from '../actions/sleep-data';

import Select from './form-components/select';
import TimeInput from './form-components/time-input';
import Radio from './form-components/radio';

import './sleep-form.css';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
'August', 'September', 'October', 'November', 'December'];
const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

export class SleepForm extends React.Component {
  onSubmit(values) {
    console.log(values);
    this.props.dispatch(postSleepData(values));
    this.props.history.push(`/stats`);
  }
  render() {
    return (
      <div className="sleep-form-background">
        <div className="row">
          <div className="col-12 main-area">
            <section className="sleep-form-section">
              <h1>New Night of Sleep</h1>
              <form 
                className="sleep-form" 
                onSubmit={this.props.handleSubmit(values =>
                  this.onSubmit(values)
                )}>
                <section name="date-of-sleep">
                  <div className="date-div">
                    <label htmlFor="month">Month</label>
                    <div className="date-field">
                      <Field
                        component={Select}
                        name="month"
                        options={months}
                        validate={required}
                      />
                    </div>
                  </div>
                  <div className="date-div">
                    <label htmlFor="day">Day</label>
                    <div className="date-field">
                      <Field
                        component={Select}
                        name="day"
                        options={days}
                        validate={required}
                      />
                    </div>
                  </div>
                  <div className="date-div">
                    <label htmlFor="year">Year</label>
                    <div className="date-field">
                      <Field
                        component={Select}
                        name="year"
                        options={[2017, 2018]}
                        validate={required}
                      />
                    </div>
                  </div>
                </section>
                <section id="sleep-times">
                  <div className="time-field">
                    <Field
                      component={TimeInput}
                      name="bedTime"
                      id="bed-time"
                      label="When Did You Go To Bed?"
                      validate={required}
                    />
                  </div>
                  <div className="time-field">
                    <Field
                      component={TimeInput}
                      name="awakeTime"
                      id="awake-time"
                      label="What Time Did You Wake Up?"
                      validate={required}
                    />
                  </div>
                </section>
                <section id="sleep-alarm">
                  <p>Did you wake up with an alarm?</p>
                  <Field
                    component={Radio}
                    name="alarm"
                    options={['Yes', 'No']}
                    validate={required}
                  />
                </section>
                <section id="sleep-exercise">
                  <p>Did you exercise this day?</p>
                  <Field
                    component={Radio}
                    name="exercise"
                    options={['Yes', 'No']}
                    validate={required}
                  />
                </section>
                <section id="sleep-blue-light">
                  <p>Did you use a phone, tablet, computer, or watch TV within 30 minutes of sleep?</p>
                  <Field
                    component={Radio}
                    name="blueLight"
                    options={['Yes', 'No']}
                    validate={required}
                  />
                </section>
                <section id="sleep-caffeine">
                  <label htmlFor="caffeine">How many servings of caffeine did you consume?</label>
                  <div className="caffeine-field">
                    <Field
                      component={Select}
                      name="caffeine"
                      options={[0, 1, 2, 3, 4, 5]}
                      validate={required}
                    />
                  </div>
                </section>
                <section id="sleep-mood-wake">
                  <label htmlFor="moodAtWake">Rate your mood from 1 to 10 (10 being best) at waking</label>
                  <div className="moodAtWake-field">
                    <Field
                      component={Select}
                      name="moodAtWake"
                      options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                      validate={required}
                    />
                  </div>
                </section>
                <section id="sleep-mood-sleep">
                  <label htmlFor="moodAtSleep">Rate your mood from 1 to 10 (10 being best) before sleeping</label>
                  <div className="moodAtSleep-field">
                    <Field
                      component={Select}
                      name="moodAtSleep"
                      options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                      validate={required}
                    />
                  </div>
                </section>
                <button className="submit-button" type="submit">Submit</button>
              </form>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'sleep'
})(SleepForm);