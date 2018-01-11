import React from 'react';
import {connect} from 'react-redux';
import NVD3Chart from 'react-nvd3';

import './caffeine-chart.css';
import '../../node_modules/nvd3/build/nv.d3.min.css';



class CaffeineChart extends React.Component {
  calculateData(sleeps) {
    var datum = [
      {
        "key": "Caffeine",
        
        "color": "#9f5dfc",
        "values": []
      },
      {
        "key": "Morning Mood",
        "color": "#333",
        "values": []
      }
    ];
    for (let i=0; i<sleeps.length; i++) {
      datum[0].values.push([sleeps[i].date, sleeps[i].caffeine]);
      datum[1].values.push([sleeps[i].date, sleeps[i].moodAtWake]);
    }
    return datum;
  }
  render() {
    const data = this.calculateData(this.props.sleeps);
    const xdata = function(d,i) {return i};
    const ydata = function(d,i) {return d[1]};
    return (
      <div className="caffeine-chart">
        <h2>Caffeine Chart</h2>
        <h4>Plots Daily Caffeine Servings (0-5) Along With Corresponding Morning Mood(1-10)</h4>
        <NVD3Chart
          height={275}
          type="linePlusBarChart"
          datum={data}
          x= {xdata}
          y= {ydata}
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