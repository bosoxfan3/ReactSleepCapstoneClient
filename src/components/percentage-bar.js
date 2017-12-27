import React from 'react';
import {connect} from 'react-redux';
import d3 from 'd3';
import NVD3Chart from 'react-nvd3';
import ReactDOM from 'react-dom';


import './percentage-bar.css';

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

  var datum = [{
      key: "Cumulative Return",
      values: [
        {
          "label" : "A" ,
          "value" : -29.765957771107
        } ,
        {
          "label" : "B" ,
          "value" : 0
        } ,
        {
          "label" : "C" ,
          "value" : 32.807804682612
        } ,
        {
          "label" : "D" ,
          "value" : 196.45946739256
        } ,
        {
          "label" : "E" ,
          "value" : 0.19434030906893
        } ,
        {
          "label" : "F" ,
          "value" : -98.079782601442
        } ,
        {
          "label" : "G" ,
          "value" : -13.925743130903
        } ,
        {
          "label" : "H" ,
          "value" : -5.1387322875705
        }
      ]
    }
  ];

  // Unmounting example
  export default class PercentageBar extends React.Component {

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

  // ReactDOM.render(
  //   <Chart />,
  //   document.getElementById('barChart')
  // );
  // ReactDOM.render(
  //   <Chart />,
  //   document.getElementById('barChart')
  // );

// export default connect()(PercentageBar);