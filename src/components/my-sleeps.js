import React from 'react';
import {connect} from 'react-redux';
import {fetchSleepData, deleteSleepData, saveCurrentSleep} from '../actions/sleep-data';

export class MySleeps extends React.Component {
  onDeleteClick(id) {
    this.props.dispatch(deleteSleepData(id));
    this.componentDidUpdate();
  }

  switchToEditingPage(sleep) {
    this.props.dispatch(saveCurrentSleep(sleep));
    this.props.history.push(`/sleeps/${sleep.id}`);
  }

  componentDidUpdate(prevProps, prevState) {
    this.props.dispatch(fetchSleepData());
  }

  render() {
    const sleeps = this.props.sleeps.map((sleep, index) => {
      let alarm;
      let exercise;
      let blueLight;
      if (sleep.alarm === true) {
        alarm = 'Yes'
      } else {
        alarm = 'No'
      }
      if (sleep.exercise === true) {
        exercise = 'Yes'
      } else {
        exercise = 'No'
      }
      if (sleep.blueLight === true) {
        blueLight = 'Yes'
      } else {
        blueLight = 'No'
      }
      return (
        <div key={index}>
          <h3>{sleep.date}</h3>
          <p>Hours: {sleep.hours}</p>
          <p>Alarm: {alarm}</p>
          <p>Exercise: {exercise}</p>
          <p>Blue Light: {blueLight}</p>
          <p>Caffeine: {sleep.caffeine} servings</p>
          <p>Morning Mood: {sleep.moodAtWake}</p>
          <p>Night Mood: {sleep.moodAtSleep}</p>
          <button onClick={() => this.switchToEditingPage(sleep)}>Edit</button>
          <button onClick={() => this.onDeleteClick(sleep.id)}>Delete</button>
        </div>
      );
    });
    return (
      <div>
        <h1>Previous Sleeps</h1>
        <div>
          {sleeps}
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