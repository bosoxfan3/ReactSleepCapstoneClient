import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Select from './form-components/select';
import TimeInput from './form-components/time-input';
import Radio from './form-components/radio';
import {required} from '../validators'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
'August', 'September', 'October', 'November', 'December'];
const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

export class SleepForm extends React.Component {
  onSubmit(values) {
    console.log(values);
  }
  render() {

    //Make sure to add required to all these fields once it is working!
    //
    //
    //
    //


    return (
      <section>
        <h2>New Night of Sleep</h2>
        <form 
          className="sleep-form" 
          onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <fieldset name="date-of-sleep">
            <label htmlFor="month">Month</label>
            <Field
              component={Select}
              name="month"
              options={months}
              validate={required}
            />
            <label htmlFor="day">Day</label>
            <Field
              component={Select}
              name="day"
              options={days}
              validate={required}
            />
            <label htmlFor="year">Year</label>
            <Field
              component={Select}
              name="year"
              options={[2017, 2018]}
              validate={required}
            />
          </fieldset>
          <section id="sleep-times">
            <Field
              component={TimeInput}
              name="bedTime"
              id="bed-time"
              label="When Did You Go To Bed?"
              validate={required}
            />
            <Field
              component={TimeInput}
              name="awakeTime"
              id="awake-time"
              label="What Time Did You Wake Up?"
              validate={required}
            />
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
            <Field
              component={Select}
              name="caffeine"
              options={[0, 1, 2, 3, 4, 5]}
              validate={required}
            />
          </section>
          <section id="sleep-mood-wake">
            <label htmlFor="wakeup">Rate your mood from 1 to 10 (10 being best) at waking</label>
            <Field
              component={Select}
              name="wakeUp"
              options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              validate={required}
            />
          </section>
          <section id="sleep-mood-sleep">
            <label htmlFor="toSleep">Rate your mood from 1 to 10 (10 being best) before sleeping</label>
            <Field
              component={Select}
              name="toSleep"
              options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              validate={required}
            />
          </section>
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
}

export default reduxForm({
  form: 'sleep'
})(SleepForm);