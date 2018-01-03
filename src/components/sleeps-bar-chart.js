import React from 'react';
import {connect} from 'react-redux';
// import d3 from 'd3';
import NVD3Chart from 'react-nvd3';


import './sleeps-bar-chart.css';

class SleepsBar extends React.Component {
    calculateData(sleeps) {
      
      var datum = [{
        key: "Cumulative Return",
        values: [
        ]
      }];
        for (let i=0; i<sleeps.length; i++) {
          datum[0].values.push({
            "label" : sleeps[i].date,
            "value" : sleeps[i].hours
          })
        }

      return datum;
    }

    render() {
      var datum = this.calculateData(this.props.sleeps);
      var context = {
        getColor: function(i){
          var colors = ['blue']
          return colors[Math.floor(Math.random() * colors.length)];
        }
      };
      return (
        <div className="sleeps-bar-chart">
          <h2>Hours Slept</h2>
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

  // ReactDOM.render(
  //   <Chart />,
  //   document.getElementById('barChart')
  // );
  // ReactDOM.render(
  //   <Chart />,
  //   document.getElementById('barChart')
  // );

export default connect(mapStateToProps)(SleepsBar);