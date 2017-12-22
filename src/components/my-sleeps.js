import React from 'react';
import {connect} from 'react-redux';
import {deleteSleepData} from '../actions/sleep-data';

import './my-sleeps.css';

export class MySleeps extends React.Component {
  onDeleteClick(id) {
    this.props.dispatch(deleteSleepData(id));
  }
  switchToEditingPage(sleep) {
    this.props.history.push(`/sleeps/${sleep.id}`);
  }
  render() {
    const sleep = this.props.sleeps.map((sleep, index) => {
      let exercise = sleep.exercise? 'Yes' : 'No';
      let blueLight = sleep.blueLight? 'Yes' : 'No';
      let alarm  = sleep.alarm? 'Yes' : 'No';
      let time = sleep.awakeTime.split(':');
      let hours = Number(time[0]);
      let minutes = Number(time[1]);
      let awakeTime;
      if (hours > 0 && hours <= 12) {
        awakeTime=''+hours;
      } else if (hours > 12) {
        awakeTime=''+(hours-12);
      } else if (hours === 0) {
        awakeTime="12";
      }
      awakeTime += (minutes < 10) ? ':0'+minutes : ':'+minutes;
      awakeTime += (hours >= 12) ? ' PM' : ' AM';
      time = sleep.bedTime.split(':');
      hours = Number(time[0]);
      minutes = Number(time[1]);
      let bedTime;
      if (hours > 0 && hours <= 12) {
        bedTime=''+hours;
      } else if (hours > 12) {
        bedTime=''+(hours-12);
      } else if (hours === 0) {
        bedTime="12";
      }
      bedTime += (minutes < 10) ? ':0'+minutes : ':'+minutes;
      bedTime += (hours >= 12) ? ' PM' : ' AM';
      return (
        <div key={index} className="sleep">
          <div className="sleep-date">
            <h3>{sleep.date}</h3>
          </div>
          <div className="sleep-section">
            <p>Hours: {sleep.hours}</p>
            <p>Bed Time: {bedTime}</p>
            <p>Wake Time: {awakeTime}</p>
          </div>
          <div className="sleep-section">
            <p>Alarm: {alarm}</p>
            <p>Exercise: {exercise}</p>
            <p>Blue Light: {blueLight}</p>
          </div>
          <div className="sleep-section">
            <p>Caffeine: {sleep.caffeine} servings</p>
            <p>Morning Mood: {sleep.moodAtWake}</p>
            <p>Night Mood: {sleep.moodAtSleep}</p>
          </div>
          <div className="button-section">
            <button className="button" onClick={() => this.switchToEditingPage(sleep)}>Edit</button>
            <button className="button" onClick={() => this.onDeleteClick(sleep.id)}>Delete</button>
          </div>
        </div>
      );
    });
    return (
      <div className="background">
        <div className="row">
          <div className="col-12 main-area">
            <h1 className="main-title">Previous Sleeps</h1>
            <div>
              {sleep.length? sleep : <p className="no-sleep">No previous nights of sleep have been recorded!</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sleeps: state.sleepData.sleeps,
  editing: state.sleepData.editing
});

export default connect(mapStateToProps)(MySleeps);
