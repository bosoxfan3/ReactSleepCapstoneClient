import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {Redirect} from 'react-router-dom';
import Select from './form-components/select';
import TimeInput from './form-components/time-input';
import Radio from './form-components/radio';
import {required} from '../validators'
import {updateSleepData} from '../actions/sleep-data';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
'August', 'September', 'October', 'November', 'December'];
const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// let awakeTimeAdjustment;

export class EditingSection extends React.Component {
  onSubmit(values) {
    this.props.dispatch(updateSleepData(values));
  }
  onComponentDidMount() {
    // this.props.dispatch(fetchSleepData(this.props.match.params.id));
    console.log(this.props.sleep);
  }
  // setEditing() {
  //   // this.props.dispatch(turnEditingOff());
  // }
  render() {
    // if (this.props.editing === false) {
    //   return <Redirect to="/stats" />
    // }
    // if (this.props.sleep.awakeTime.length < 5) {
    //   awakeTimeAdjustment = `0${this.props.sleep.awakeTime}`;
    // } else {
    //   awakeTimeAdjustment = this.props.sleep.awakeTime;
    // }
    // let month = this.props.sleep.date.split('-')[0];
    // let day = this.props.sleep.date.split('-')[1];
    // let year = this.props.sleep.date.split('-')[2];
    // if (month === '1') {
    //   month = 'January';
    // } else if (month === '2') {
    //   month = 'February';
    // } else if (month === '3') {
    //   month = 'March';
    // } else if (month === '4') {
    //   month = 'April';
    // } else if (month === '5') {
    //   month = 'May';
    // } else if (month === '6') {
    //   month = 'June';
    // } else if (month === '7') {
    //   month = 'July';
    // } else if (month === '8') {
    //   month = 'August';
    // } else if (month === '9') {
    //   month = 'September';
    // } else if (month === '10') {
    //   month = 'October';
    // } else if (month === '11') {
    //   month = 'November';
    // } else if (month === '12') {
    //   month = 'December';
    // } else {
    //   month = '';
    // }
    //defaultValue = {month} , {day} , {awakeTimeAdjustment} 
    //{this.props.sleep.bedTime}, etc.
    return (
      <section>
        <form onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        {/* <h3>Editing {this.props.sleep.date}</h3> */}
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
              value={this.props.sleep.bedTime}
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
            <label htmlFor="moodAtWake">Rate your mood from 1 to 10 (10 being best) at waking</label>
            <Field
              component={Select}
              name="moodAtWake"
              options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              validate={required}
            />
        </section>
        <section id="sleep-mood-sleep">
            <label htmlFor="moodAtSleep">Rate your mood from 1 to 10 (10 being best) before sleeping</label>
            <Field
              component={Select}
              name="moodAtSleep"
              options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              validate={required}
            />
        </section>
        <button type="submit">Submit Changes</button>
        </form>
        <button>Stop Editing</button> 
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    sleep: state.sleepData.currentSleep,
  }
};

EditingSection = connect(mapStateToProps)(EditingSection);
EditingSection = reduxForm({
  form: 'edit'
})(EditingSection);

export default EditingSection;

// export default connect(mapStateToProps)(EditingSection);