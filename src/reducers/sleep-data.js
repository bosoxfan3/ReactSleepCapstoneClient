import {
  FETCH_SLEEP_DATA_SUCCESS,
  FETCH_SLEEP_DATA_ERROR
} from '../actions/sleep-data';

const initialState = {
  sleeps: [],
  error: null
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
  return state;
}