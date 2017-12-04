import React from 'react';
import {connect} from 'react-redux';

export function SleepForm() {
  return (
    <section>
      <h2>New Night of Sleep</h2>
      <form id="sleep-form" action="/login" method="post">
        <fieldset name="date-of-sleep">
          <input placeholder="01" type="number" name="month" id="month" required />
          <p>.</p>
          <input placeholder="01" type="number" name="day" id="day" required />
          <p>.</p>
          <input placeholder="2017" type="number" name="year" id="year" required />
        </fieldset>
        <section id="sleep-times">
          <input id="bed-time" type="time" required />
          <input id="awake-time" type="time" required />
        </section>
        <section id="sleep-alarm">
          <p>Did you wake up with an alarm?</p>
          <input type="radio" name="alarm" id="alarm-yes" value="true" />
          <label for="alarm-yes">Yes</label>
          <input type="radio" name="alarm" id="alarm-no" value="false" />
          <label for="alarm-no">No</label>
        </section>
        <section id="sleep-exercise">
          <p>Did you exercise this day?</p>
          <input type="radio" name="exercise" id="exercise-yes" value="true" />
          <label for="exercise-yes">Yes</label>
          <input type="radio" name="exercise" id="exercise-no" value="false" />
          <label for="exercise-no">No</label>
        </section>
        <section id="sleep-blue-light">
          <p>Did you use a phone, tablet, computer, or watch TV within 30 minutes of sleep?</p>
          <input type="radio" name="blue-light" id="blue-light-yes" value="true" />
          <label for="blue-light-yes">Yes</label>
          <input type="radio" name="blue-light" id="blue-light-no" value="false" />
          <label for="blue-light-no">No</label>
        </section>
        <section id="sleep-caffeine">
          <p>How many servings of caffeine did you consume?</p>
          <select name="caffeine" id="caffeine" required>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </section>
        <section id="sleep-moood-wake">
          <p>Rate your mood from 1 to 10 (10 being best) at waking</p>
          <select name="wake-up"
  );
}