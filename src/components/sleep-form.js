import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Select from './form-components/select';
import TimeInput from './form-components/time-input';
import Radio from './form-components/radio';

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
            <h4>Date of Sleep</h4>
            <Field
              component={Select}
              name="month"
              label="Month"
              options={months}
            />
            <Field
              component={Select}
              name="day"
              label="Day"
              options={days}
            />
            <Field
              component={Select}
              name="year"
              label="Year"
              options={[2017, 2018]}
            />
          </fieldset>
          <section id="sleep-times">
            <Field
              component={TimeInput}
              name="bedTime"
              id="bed-time"
              label="When Did You Go To Bed?"
            />
            <Field
              component={TimeInput}
              name="awakeTime"
              id="awake-time"
              label="What Time Did You Wake Up?"
            />
          </section>
          <section id="sleep-alarm">
            <p>Did you wake up with an alarm?</p>
            <Field
              component={Radio}
              name="alarm"
              options={['Yes', 'No']}
            />
          </section>
          <section id="sleep-exercise">
            <p>Did you exercise this day?</p>
            <Field
              component={Radio}
              name="exercise"
              options={['Yes', 'No']}
            />
          </section>
          <section id="sleep-blue-light">
            <p>Did you use a phone, tablet, computer, or watch TV within 30 minutes of sleep?</p>
            <Field
              component={Radio}
              name="blueLight"
              options={['Yes', 'No']}
            />
          </section>
          <section id="sleep-caffeine">
            <Field
              component={Select}
              name="caffeine"
              label="How many servings of caffeine did you consume?"
              options={[1, 2, 3, 4, 5]}
            />
          </section>
          <section id="sleep-mood-wake">
            <Field
              component={Select}
              name="wakeUp"
              label="Rate your mood from 1 to 10 (10 being best) at waking"
              options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            />
          </section>
          <section id="sleep-mood-sleep">
            <Field
              component={Select}
              name="toSleep"
              label="Rate your mood from 1 to 10 (10 being best) before sleeping"
              options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
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