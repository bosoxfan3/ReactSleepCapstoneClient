import {
  FETCH_SLEEP_DATA_SUCCESS,
  FETCH_SLEEP_DATA_ERROR,
  POST_SLEEP_DATA_SUCCESS,
  POST_SLEEP_DATA_ERROR,
  DELETE_SLEEP_DATA_SUCCESS,
  DELETE_SLEEP_DATA_ERROR,
  UPDATE_SLEEP_DATA_SUCCESS,
  UPDATE_SLEEP_DATA_ERROR,
  SAVE_CURRENT_SLEEP
//   TURN_EDITING_OFF
} from '../actions/sleep-data';

const initialState = {
  sleeps: [],
  error: null,
  index: null,
  editing: false,
  currentSleep: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_SLEEP_DATA_SUCCESS) {
      return Object.assign({}, state, {
          sleeps: action.data,
          error: null
      });
  } else if (action.type === FETCH_SLEEP_DATA_ERROR) {
      return Object.assign({}, state, {
          error: action.error
      });
  }
  if (action.type === POST_SLEEP_DATA_SUCCESS) {
     return Object.assign({}, state, {
         sleeps: [...state.sleeps, action.data]
     });
  }
  if (action.type === POST_SLEEP_DATA_ERROR) {
      return Object.assign({}, state, {
          error: action.error
      });
  }
  if (action.type === DELETE_SLEEP_DATA_SUCCESS) {
      return Object.assign({}, state, {
          sleeps: state.sleeps.filter(sleep => sleep.date !== action.data.date)
      });
  }
  if (action.type === DELETE_SLEEP_DATA_ERROR) {
      return Object.assign({}, state, {
          error: action.error
      });
  }
  if (action.type === UPDATE_SLEEP_DATA_SUCCESS) {
      return Object.assign({}, state, {
          sleeps: state.sleeps.map(sleep =>
            sleep.date === action.sleep.date ? action.data : sleep
        )
      });
  }
  if (action.type === UPDATE_SLEEP_DATA_ERROR) {
      return Object.assign({}, state, {
          error: action.error
      });
  }
  if (action.type === SAVE_CURRENT_SLEEP) {
      return Object.assign({}, state, {
          currentSleep: action.data
      });
  }
//   if (action.type === TURN_EDITING_OFF) {
//       return Object.assign({}, state, {
//           editing: false,
//           currentSleep: null
//       });
//   }
  return state;
}