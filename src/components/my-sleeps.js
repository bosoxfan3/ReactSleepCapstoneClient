import React from 'react';
import {connect} from 'react-redux';

export function MySleeps(props) {
  const sleeps = props.sleeps.map((sleep) => {
    return (
      <div>
        <h3>{sleep.date}</h3>
        <p>Hours: {sleep.hours}</p>
        <p>Alarm: {sleep.alarm}</p>
        <p>Exercise: {sleep.exercise}</p>
        <p>Blue Light: {sleep.blueLight}</p>
        <p>Caffeine: {sleep.caffeine} servings</p>
        <p>Morning Mood: {sleep.moodAtWake}</p>
        <p>Night Mood: {sleep.moodAtSleep}</p>
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

const mapStateToProps = state => ({
  sleeps: state.sleeps
});

export default connect(mapStateToProps)(MySleeps);