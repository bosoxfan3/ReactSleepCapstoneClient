const initialState = {
  sleeps: [{
    date: '10/27/2017',
    hours: 8,
    bedTime: '10:00 PM',
    awakeTime: '6:00 AM',
    alarm: 'Yes',
    exercise: 'Yes',
    blueLight: 'Yes',
    caffeine: 2,
    moodAtWake: 6,
    moodAtSleep: 4
  }, {
    date: '10/29/2017',
    hours: 10,
    bedTime: '10:00 PM',
    awakeTime: '8:00 AM',
    alarm: 'No',
    exercise: 'Yes',
    blueLight: 'Yes',
    caffeine: 1,
    moodAtWake: 10,
    moodAtSleep: 4
  }]
};

export default (state=initialState, action) => {
  return state;
}