import React from 'react';
import {connect} from 'react-redux';
import {fetchSleepData, deleteSleepData, saveCurrentSleep} from '../actions/sleep-data';
import {Redirect} from 'react-router-dom';
// import {reduxForm, Field} from 'redux-form';
// import {required} from '../validators'
// import Select from './editing-form-components/select';


// let currentEditIndex;
// let currentSleepID;

export class MySleeps extends React.Component {
  onDeleteClick(id) {
    this.props.dispatch(deleteSleepData(id));
    this.componentDidUpdate();
  }

  // createEditingForm(index) {
  //   let editingForm = (
  //     <div>
  //       <form onSubmit={this.props.handleSubmit(values =>
  //         this.onSubmit(values)
  //       )}>
  //       <h3>{this.props.sleeps[index].date}</h3> 
  //       <section id="sleep-caffeine">
  //           <label htmlFor="caffeine">How many servings of caffeine did you consume?</label>
  //           <Field
  //             component={Select}
  //             name="caffeine"
  //             selected={this.props.sleeps[index].caffeine}
  //             options={[0, 1, 2, 3, 4, 5]}
  //             validate={required}
  //           />
  //         </section> 
  //       <button type="submit">Submit Changes</button>
  //       </form>
  //       <button onClick={this.props.setEditing()}>Stop Editing</button> 
  //     </div> 
  //   );
  //   return (
  //     <div>
  //       {editingForm}
  //     </div>
  //   )
  // }

  switchToEditingPage(sleep) {
    console.log(sleep);
    this.props.dispatch(saveCurrentSleep(sleep));
    this.props.history.push(`/sleeps/${sleep.id}`);
    // this.props.dispatch(turnEditingOn(sleep));
    // if (editing === false) {
    //   editing = true;
    //   currentEditIndex = index;
    //   this.createEditingForm(index);
    // } else {
    //   editing = false;
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    this.props.dispatch(fetchSleepData());
  }

  // onSubmit(values) {
  //   this.props.dispatch(updateSleepData(values));
  // }



  render() {
    
    // if (this.props.editing === true) {
    //   return <Redirect to={`/sleeps/${currentSleepID}`} />;
    // }

    const sleeps = this.props.sleeps.map((sleep, index) => {
      let alarm;
      let exercise;
      let blueLight;
      if (sleep.alarm === true) {
        alarm = 'Yes'
      } else {
        alarm = 'No'
      }
      if (sleep.exercise === true) {
        exercise = 'Yes'
      } else {
        exercise = 'No'
      }
      if (sleep.blueLight === true) {
        blueLight = 'Yes'
      } else {
        blueLight = 'No'
      }
      return (
        <div key={index}>
          <h3>{sleep.date}</h3>
          <p>Hours: {sleep.hours}</p>
          <p>Alarm: {alarm}</p>
          <p>Exercise: {exercise}</p>
          <p>Blue Light: {blueLight}</p>
          <p>Caffeine: {sleep.caffeine} servings</p>
          <p>Morning Mood: {sleep.moodAtWake}</p>
          <p>Night Mood: {sleep.moodAtSleep}</p>
          <button onClick={() => this.switchToEditingPage(sleep)}>Edit</button>
          <button onClick={() => this.onDeleteClick(sleep.id)}>Delete</button>
        </div>
      );
    });
    return (
      <div>
        <h1>Previous Sleeps</h1>
        <div>
          {sleeps}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sleeps: state.sleepData.sleeps,
  editing: state.sleepData.editing
});

export default connect(mapStateToProps)(MySleeps);