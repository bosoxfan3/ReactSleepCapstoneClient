import React from 'react';
import {connect} from 'react-redux';
import NVD3Chart from 'react-nvd3';

import './boolean-chart.css';

export class BooleanChart extends React.Component {
  generateData(sleeps) {
    let data = [
      {
        label: 'Exercise&Alarm&BlueLight',
        values: [],
        average: 0
      },
      {
        label: 'Exercise&Alarm',
        values: [],
        average: 0
      },
      {
        label: 'Exercise&BlueLight',
        values: [],
        average: 0
      },
      {
        label: 'Alarm&BlueLight',
        values: [],
        average: 0
      },
      {
        label: 'ExerciseOnly',
        values: [],
        average: 0
      },
      {
        label: 'AlarmOnly',
        values: [],
        average: 0
      },
      {
        label: 'BlueLightOnly',
        values: [],
        average: 0
      },
      {
        label: 'None',
        values: [],
        average: 0
      }
    ];
    for (let i=0; i<sleeps.length; i++) {
      if (sleeps[i].exercise === true && sleeps[i].alarm === true && sleeps[i].blueLight === true) {
        data[0].values.push(sleeps[i].moodAtWake);
      } else if (sleeps[i].exercise === true && sleeps[i].alarm === true) {
        data[1].values.push(sleeps[i].moodAtWake);
      } else if (sleeps[i].exercise === true && sleeps[i].blueLight === true) {
        data[2].values.push(sleeps[i].moodAtWake);
      } else if (sleeps[i].alarm === true && sleeps[i].blueLight === true) {
        data[3].values.push(sleeps[i].moodAtWake);
      } else if (sleeps[i].exercise === true) {
        data[4].values.push(sleeps[i].moodAtWake);
      } else if (sleeps[i].alarm === true) {
        data[5].values.push(sleeps[i].moodAtWake);
      } else if (sleeps[i].blueLight === true) {
        data[6].values.push(sleeps[i].moodAtWake);
      } else {
        data[7].values.push(sleeps[i].moodAtWake);
      }
    }
    for (let j=0; j<data.length; j++) {
      if (data[j].values.length === 0) {
        data[j].average = 0;
      } else {
        let total = 0;
        for (let k=0; k<data[j].values.length; k++) {
          total += data[j].values[k];
        }
        data[j].average = total / data[j].values.length;
      }
    }
    let datum = [{
      values: []
    }];
    for (let i=0; i<data.length; i++) {
      datum[0].values.push({
        "label" : data[i].label,
        "value" : data[i].average
      });
    }
    return datum;
  }
  render() {
    const data = this.generateData(this.props.sleeps);
    var context = {
      getColor: function(i){
        var colors = ['#ff3333'];
        for (let i=0; i<colors.length; i++) {
          return colors[i];
        }
      }
    };
    return (
    <div className="boolean-chart">
      <h2>External Factors Chart</h2>
      <h4>How Combinations of Exercise, Using an Alarm, and Exposing Yourself to Blue Light Affect Your Morning Mood (Click or Hover Over Bars For More Details)</h4>
      <NVD3Chart
        height={300}
        context={context}
        color={{name:'getColor', type:'function'}}
        tooltip={{enabled: true}}
        type="discreteBarChart"
        datum={data}
        x="label"
        y="value"
      />
    </div>
    )
  }
}

const mapStateToProps = state => ({
  sleeps: state.sleepData.sleeps
});

export default connect(mapStateToProps)(BooleanChart);