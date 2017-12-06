import {
  FETCH_PROTECTED_DATA_SUCCESS,
  FETCH_PROTECTED_DATA_ERROR
} from '../actions/protected-data';

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

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
      return Object.assign({}, state, {
          data: action.data,
          error: null
      });
  } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
      return Object.assign({}, state, {
          error: action.error
      });
  }
  return state;
}