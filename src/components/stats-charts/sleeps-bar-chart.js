import React from 'react';
import {connect} from 'react-redux';
import NVD3Chart from 'react-nvd3';

import './sleeps-bar-chart.css';

export class SleepsBarChart extends React.Component {
    calculateData(sleeps) {
      let datum = [{
        values: []
      }];
      for (let i=0; i<sleeps.length; i++) {
        datum[0].values.push({
          "label" : sleeps[i].date,
          "value" : sleeps[i].hours
        });
      }
      return datum;
    }
    render() {
      let datum = this.calculateData(this.props.sleeps);
      let context = {
        getColor: function(i){
          let colors = ['#ff944d']
          return colors[Math.floor(Math.random() * colors.length)];
        }
      };
      return (
        <div className="sleeps-bar-chart">
          <h2>Hours Slept By Day</h2>
          <NVD3Chart
            height={300}
            context={context}
            color={{name:'getColor', type:'function'}}
            tooltip={{enabled: true}}
            type="discreteBarChart"
            datum={datum}
            x="label"
            y="value"
          />
        </div>
      );
    }
  }

const mapStateToProps = state => ({
  sleeps: state.sleepData.sleeps
});

export default connect(mapStateToProps)(SleepsBarChart);