import {
  FETCH_SLEEP_DATA_SUCCESS,
  FETCH_SLEEP_DATA_ERROR,
  FETCH_SLEEP_DATA_BY_ID_SUCCESS,
  POST_SLEEP_DATA_SUCCESS,
  // DELETE_SLEEP_DATA_SUCCESS,
  UPDATE_SLEEP_DATA_SUCCESS,
} from '../actions/sleep-data';

const initialState = {
  sleeps: [],
  error: null,
  currentSleep: {
    awakeTime: "00:00",
    alarm: false,
    bedTime:  "00:00",
    blueLight:  false,
    caffeine:  0,
    date:  "Jan 01 2017",
    exercise:  false,
    hours:  0,
    id:  "",
    moodAtSleep:  0,
    moodAtWake: 0
  }
};


  export default function reducer(state = initialState, action) {
    if (action.type === FETCH_SLEEP_DATA_SUCCESS) {
      return Object.assign({}, state, {
        sleeps: action.data,
        error: null
      });
    }
    if (action.type === FETCH_SLEEP_DATA_ERROR) {
      return Object.assign({}, state, {
        error: action.error
      });
    }
    if (action.type === FETCH_SLEEP_DATA_BY_ID_SUCCESS) {
      return Object.assign({}, state, {
        currentSleep: action.data,
        error: null
      });
    }
    if (action.type === POST_SLEEP_DATA_SUCCESS) {
      return Object.assign({}, state, {
        sleeps: [...state.sleeps, action.data],
        error: null
      });
    }
    // if (action.type === DELETE_SLEEP_DATA_SUCCESS) {
    //   return Object.assign({}, state, {
    //     sleeps: state.sleeps.filter(sleep => sleep.id !== action.data.id),
    //     error: null
    //   });
    // }
    if (action.type === UPDATE_SLEEP_DATA_SUCCESS) {
      return Object.assign({}, state, {
        sleeps: state.sleeps.map(sleep =>
          sleep.id === action.data.id ? action.data : sleep
        ),
        error: null
      });
    }
    return state;
  }
