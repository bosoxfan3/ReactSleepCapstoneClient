import React from 'react';
import {connect} from 'react-redux';
import d3 from 'd3';
import NVD3Chart from 'react-nvd3';
import ReactDOM from 'react-dom';


import './sleeps-bar.css';

// export function PercentageBar(props) {
//   let totalSleeps = props.sleeps.length;
//   let positiveMornings = 0;
//   let negativeMornings = 0;
//   for (let i=0; i<props.sleeps.length; i++) {
//     if (props.sleeps[i].moodAtWake < 6) {
//       negativeMornings++
//     } else {
//       positiveMornings++
//     }
//   }
//   let positivePercentage = (positiveMornings / totalSleeps)*100+'%';
//   let negativePercentage = (negativeMornings / totalSleeps)*100+'%';
//   return (
//     <div className="percentage-bar2">
//       <div className="positive-sleeps" width={positivePercentage}>
//         <p>{positivePercentage}</p>
//       </div>
//       <div className="negative-sleeps" width={negativePercentage}>
//         <p>{negativePercentage}</p>
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = state => ({
//   sleeps: state.sleepData.sleeps
// });

  // var datum = [{
  //     key: "Cumulative Return",
  //     values: [
  //       {
  //         "label" : "A" ,
  //         "value" : -29.765957771107
  //       } ,
  //       {
  //         "label" : "B" ,
  //         "value" : 0
  //       } ,
  //     ]
  //   }
  // ];

  // Unmounting example
class SleepsBar extends React.Component {
    calculateData(sleeps) {
      
      var datum = [{
        key: "Cumulative Return",
        values: [
        ]
      }];
      console.log(datum[0].values);
        for (let i=0; i<sleeps.length; i++) {
          datum[0].values.push({
            "label" : sleeps[i].date,
            "value" : sleeps[i].hours
          })
        }

      return datum;
    }
    constructor(props) {
      super(props);
      this.state = {
        visible: true
      };
      this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility() {
      this.setState({ visible: !this.state.visible });
    }

    render() {
      console.log(this.props);
      var datum = this.calculateData(this.props.sleeps);
      var chart;
      var context = {
        getColor: function(i){
          var colors = d3.scale.category20().range().slice(10);
          return colors[Math.floor(Math.random() * colors.length)];
        }
      };
      if(this.state.visible) {
        chart = <NVD3Chart context={context} color={{name:'getColor', type:'function'}} tooltip={{enabled: true}} type="discreteBarChart" datum={datum} x="label" y="value" />;
      }

      return (
        <div>
          <button onClick={this.toggleVisibility}>Toggle Visibility</button>
          {chart}
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