import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, change, Field} from 'redux-form';

import {required} from '../../validators'
import {updateSleepData} from '../../actions/sleep-data';
import Select from '../form-components/select';
import TimeInput from '../form-components/time-input';
import Radio from '../form-components/radio';

import './editing-section.css';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
'August', 'September', 'October', 'November', 'December'];
const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

export class EditingSection extends React.Component {
  onSubmit(values) {
    this.props.dispatch(updateSleepData(values, this.props.sleep.id));
    this.props.history.push('/stats');
  }
  stopEditing() {
    this.props.history.push('/sleeps');
  }
  componentWillReceiveProps(newProps){
    if (newProps.sleep.id) {
      this.setDefaults()
    }
  }
  setDefaults(){
    let bedTimeAdjustment;
    if (this.props.sleep.bedTime.length < 5) {
      bedTimeAdjustment = `0${this.props.sleep.bedTime}`
    } else {
      bedTimeAdjustment = this.props.sleep.bedTime;
    }
    let awakeTimeAdjustment;
    if (this.props.sleep.awakeTime.length < 5) {
      awakeTimeAdjustment = `0${this.props.sleep.awakeTime}`;
    } else {
      awakeTimeAdjustment = this.props.sleep.awakeTime;
    }
    let month = this.props.sleep.date.split(' ')[0];
    let day = this.props.sleep.date.split(' ')[1];
    if (day[0] === '0') {
      day = day.substring(1);
    }
    let year = this.props.sleep.date.split(' ')[2];
    if (month === 'Jan') {
      month = 'January';
    } else if (month === 'Feb') {
      month = 'February';
    } else if (month === 'Mar') {
      month = 'March';
    } else if (month === 'Apr') {
      month = 'April';
    } else if (month === 'May') {
      month = 'May';
    } else if (month === 'Jun') {
      month = 'June';
    } else if (month === 'Jul') {
      month = 'July';
    } else if (month === 'Aug') {
      month = 'August';
    } else if (month === 'Sep') {
      month = 'September';
    } else if (month === 'Oct') {
      month = 'October';
    } else if (month === 'Nov') {
      month = 'November';
    } else if (month === 'Dec') {
      month = 'December';
    } else {
      month = '';
    }
    let alarmValue = this.props.sleep.alarm ? 'Yes' : 'No';
    let exerciseValue = this.props.sleep.exercise ? 'Yes' : 'No';
    let blueLightValue = this.props.sleep.blueLight ? 'Yes' : 'No';
    this.props.dispatch(change('edit', 'month', month));
    this.props.dispatch(change('edit', 'day', day));
    this.props.dispatch(change('edit', 'year', year));
    this.props.dispatch(change('edit', 'bedTime', bedTimeAdjustment));
    this.props.dispatch(change('edit', 'awakeTime', awakeTimeAdjustment));
    this.props.dispatch(change('edit', 'alarm', alarmValue));
    this.props.dispatch(change('edit', 'exercise', exerciseValue));
    this.props.dispatch(change('edit', 'blueLight', blueLightValue));
    this.props.dispatch(change('edit', 'caffeine', this.props.sleep.caffeine));
    this.props.dispatch(change('edit', 'moodAtWake', this.props.sleep.moodAtWake));
    this.props.dispatch(change('edit', 'moodAtSleep', this.props.sleep.moodAtSleep));
  }
  render() {
    return (
      <div className="edit-form-background">
        <div className="row">
          <div className="col-12 main-area">
            <section className="editing-form-section">
              <h1>Editing {this.props.sleep.date}</h1>
              <form className="editing-form" onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values)
                )} >
                <Field
                  name="id"
                  value={this.props.sleep.id}
                  type="text"
                  component="input"
                  placeholder={this.props.sleep.id}
                  hidden
                />
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
                <button className="submit-edit-button" type="submit">Submit Changes</button>
              </form>
              <button className="stop-edit-button" onClick={() => this.stopEditing()}>Stop Editing</button>
            </section>
          </div>
        </div>
      </div>
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
  form: 'edit',
})(EditingSection);

export default EditingSection;