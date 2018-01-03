import React from 'react';
import {connect} from 'react-redux';
import NVD3Chart from 'react-nvd3';
// import BarChart from 'react-d3-components';
// import BarChart from 'react-d3-basic';


import './caffeine-chart.css';

// let BarGroupChart = require('react-d3-basic').BarGroupChart;
// import '../../node_modules/nvd3/build/nv.d3.min.css';



class ExerciseChart extends React.Component {
  calculateData(sleeps) {
    var datum = [
      {
        "key": "Exercise",
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
    for (let i=0; i<sleeps.length; i++) {
      datum[0].values.push([sleeps[i].date, sleeps[i].exercise]);
      datum[1].values.push([sleeps[i].date, sleeps[i].moodAtWake]);
    }
    return datum;
  }
  render() {
    const data = this.calculateData(this.props.sleeps);
    const xdata = function(d,i) {return i};
    const ydata = function(d,i) {return d[1]};
    return (
      <div>
        <NVD3Chart
          height={370}
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

export default connect(mapStateToProps)(ExerciseChart);

// class ExerciseChart extends React.Component {
//   generateData(sleeps) {
//     let data = [
//       {
//         label: 'Exercise&Alarm&BlueLight',
//         values: []
//       },
//       {
//         label: 'Exercise&Alarm',
//         values: []
//       },
//       {
//         label: 'Exercise&BlueLight',
//         values: []
//       },
//       {
//         label: 'Alarm&BlueLight',
//         values: []
//       },
//       {
//         label: 'ExerciseOnly',
//         values: []
//       },
//       {
//         label: 'AlarmOnly',
//         values: []
//       },
//       {
//         label: 'BlueLightOnly',
//         values: []
//       },
//       {
//         label: 'None',
//         values: []
//       }
//     ];
//     for (let i=0; i<sleeps.length; i++) {
//       if (sleeps[i].exercise && sleeps[i].alarm && sleeps[i].blueLight) {
//         data[0].values.push({x: sleeps[i].date, y: sleeps[i].moodAtWake});
//       } else if (sleeps[i].exercise && sleeps[i].alarm) {
//         data[1].values.push({x: sleeps[i].date, y: sleeps[i].moodAtWake});
//       } else if (sleeps[i].exercise && sleeps[i].blueLight) {
//         data[2].values.push({x: sleeps[i].date, y: sleeps[i].moodAtWake});
//       } else if (sleeps[i].alarm && sleeps[i].blueLight) {
//         data[3].values.push({x: sleeps[i].date, y: sleeps[i].moodAtWake});
//       } else if (sleeps[i].exercise) {
//         data[4].values.push({x: sleeps[i].date, y: sleeps[i].moodAtWake});
//       } else if (sleeps[i].alarm) {
//         data[5].values.push({x: sleeps[i].date, y: sleeps[i].moodAtWake});
//       } else if (sleeps[i].blueLight) {
//         data[6].values.push({x: sleeps[i].date, y: sleeps[i].moodAtWake});
//       } else {
//         data[7].values.push({x: sleeps[i].date, y: sleeps[i].moodAtWake});
//       }
//     }
//     return data;
//   }
//   render() {
//     const data = this.generateData(this.props.sleeps);
//     return (
//     <div>
//       <BarGroupChart
//         data={data}
//         width={300}
//         height={300}
//         x={function(d) {return d}}
//         xScale='ordinal'
//         xLabel="Booleans"
//         yLabel="Morning Mood"
//         yLabelPosition="right"
//       />
//     </div>
//     )
//   }
// }

// const mapStateToProps = state => ({
//   sleeps: state.sleepData.sleeps
// });

// export default connect(mapStateToProps)(ExerciseChart);