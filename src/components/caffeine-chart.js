import React from 'react';
import {connect} from 'react-redux';
import d3 from 'd3';
import NVD3Chart from 'react-nvd3';
import ReactDOM from 'react-dom';

import './caffeine-chart.css';
import '../../node_modules/nvd3/build/nv.d3.min.css';

var datum = [
  {
    "key": "Caffeine",
    "bar": true,
    "color": "#ccf",
    "values": []
  },
  {
    "key": "Morning Mood",
    "color": "#333",
    "values": []
  }
];

class CaffeineChart extends React.Component {
  calculateData(sleeps) {
    for (let i=0; i<sleeps.length; i++) {
      datum[0].values.push([sleeps[i].date, sleeps[i].caffeine]);
      datum[1].values.push([sleeps[i].date, sleeps[i].moodAtWake]);
    }
    console.log(datum);
    return datum;
  }
  render() {
    const datum = this.calculateData(this.props.sleeps);
    return (
      <div>
      <NVD3Chart
      width={600}
      height={370}
        type="linePlusBarChart"
        datum={datum}
        x= {function(d,i) {return i}}
        y= {function(d,i) {return d[1]}}
        options= {{focusEnable: false}}
      />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sleeps: state.sleepData.sleeps
});

export default connect(mapStateToProps)(CaffeineChart);