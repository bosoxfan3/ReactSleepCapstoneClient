import React from 'react';
import {connect} from 'react-redux';

import './percentage-bar.css';

class PercentageBar extends React.Component {
  render() {
    let totalSleeps = this.props.sleeps.length;
    let positiveMornings = 0;
    let negativeMornings = 0;
    for (let i=0; i<this.props.sleeps.length; i++) {
      if (this.props.sleeps[i].moodAtWake < 6) {
        negativeMornings++
      } else {
        positiveMornings++
      }
    }
    let positivePercentage = (positiveMornings / totalSleeps)*100+'%';
    let positivePercentageDisplay = ((positiveMornings / totalSleeps)*100).toFixed(2)+'%';
    let negativePercentage = (negativeMornings / totalSleeps)*100+'%';
    let positivePercentageBarStyle = {
      width: `${positivePercentage}`
    }
    let negativePercentageBarStyle = {
      width: `${negativePercentage}`
    } 
    return (
      <div className="percentage-bar">
        <h4>{positivePercentageDisplay}</h4>
        <div style={positivePercentageBarStyle} id="positive-percentage-bar">
          <span hidden>Positive</span>
        </div>
        <div style={negativePercentageBarStyle} id="negative-percentage-bar">
          <span hidden>Negative</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sleeps: state.sleepData.sleeps
});

export default connect(mapStateToProps)(PercentageBar);