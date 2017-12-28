import React from 'react';
import {connect} from 'react-redux';
import d3 from 'd3';
import NVD3Chart from 'react-nvd3';
import ReactDOM from 'react-dom';

var data = [
  {key: "One", y: 0},
  {key: "Two", y: 0},
  {key: "Three", y: 0},
  {key: "Four", y: 0},
  {key: "Five", y: 0},
  {key: "Six", y: 0},
  {key: "Seven", y: 0},
  {key: "Eight", y: 0},
  {key: "Nine", y: 0},
  {key: "Ten", y: 0},
];

class EveningMoodDonut extends React.Component {
  calculateData(sleeps) {
    for (let i=0; i<sleeps.length; i++) {
      if (sleeps[i].moodAtSleep === 1) {
        data[0].y++;
      }
      if (sleeps[i].moodAtSleep === 2) {
        data[1].y++
      }
      if (sleeps[i].moodAtSleep === 3) {
        data[2].y++
      }
      if (sleeps[i].moodAtSleep === 4) {
        data[3].y++
      }
      if (sleeps[i].moodAtSleep === 5) {
        data[4].y++
      }
      if (sleeps[i].moodAtSleep === 6) {
        data[5].y++
      }
      if (sleeps[i].moodAtSleep === 7) {
        data[6].y++
      }
      if (sleeps[i].moodAtSleep === 8) {
        data[7].y++
      }
      if (sleeps[i].moodAtSleep === 9) {
        data[8].y++
      }
      if (sleeps[i].moodAtSleep === 10) {
        data[9].y++
      }
    }
    return data;
  }
  render() {
    const datum = this.calculateData(this.props.sleeps);
    console.log(datum);
    return (
    <div>
    <NVD3Chart
      id="chart"
      width={600}
      height={370}
      type="pieChart"
      datum={datum}
      x="key"
      y="y"
    />
  </div>
    )
  }
}

const mapStateToProps = state => ({
  sleeps: state.sleepData.sleeps
});

export default connect(mapStateToProps)(EveningMoodDonut);