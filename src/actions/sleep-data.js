import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_SLEEP_DATA_SUCCESS = 'FETCH_SLEEP_DATA_SUCCESS';
export const fetchSleepDataSuccess = data => ({
  type: FETCH_SLEEP_DATA_SUCCESS,
  data
});

export const FETCH_SLEEP_DATA_ERROR = 'FETCH_SLEEP_DATA_ERROR';
export const fetchSleepDataError = error => ({
  type: FETCH_SLEEP_DATA_ERROR,
  error
});

export const FETCH_SLEEP_DATA_BY_ID_SUCCESS = 'FETCH_SLEEP_DATA_BY_ID_SUCCESS';
export const fetchSleepDataByIdSuccess = data => ({
  type: FETCH_SLEEP_DATA_BY_ID_SUCCESS,
  data
});

export const POST_SLEEP_DATA_SUCCESS = 'POST_SLEEP_DATA_SUCCESS';
export const postSleepDataSuccess = data => ({
  type: POST_SLEEP_DATA_SUCCESS,
  data
});

export const UPDATE_SLEEP_DATA_SUCCESS = 'UPDATE_SLEEP_DATA_SUCCESS';
export const updateSleepDataSuccess = (data) => ({
  type: UPDATE_SLEEP_DATA_SUCCESS,
  data
});

export const fetchSleepData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/sleeps`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then((data) => dispatch(fetchSleepDataSuccess(data)))
  .catch(err => {
    dispatch(fetchSleepDataError(err));
  });
};

export const fetchSleepDataById = (id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/sleeps/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then((data) => dispatch(fetchSleepDataByIdSuccess(data)))
  .catch(err => {
    dispatch(fetchSleepDataError(err));
  });
};

export const postSleepData = (values) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const bedTime = Date.parse(`${values.month} ${values.day} ${values.year} ${values.bedTime}`);
  const nextDay = Number(values.day) + 1;
  let awakeTime;
  if (values.bedTime[0] === '0') {
    //so it doesn't jump ahead a day if you go to bed after midnight
    awakeTime = Date.parse(`${values.month} ${values.day} ${values.year} ${values.awakeTime}`);
  } else {
    awakeTime = Date.parse(`${values.month} ${nextDay} ${values.year} ${values.awakeTime}`);
  }
  const data = {
    bedTime: bedTime,
    awakeTime: awakeTime,
    alarm: (values.alarm==='Yes'),
    exercise: (values.exercise==='Yes'),
    blueLight: (values.blueLight==='Yes'),
    caffeine: values.caffeine,
    moodAtWake: values.moodAtWake,
    moodAtSleep: values.moodAtSleep,
  }

  return fetch(`${API_BASE_URL}/sleeps/`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then((data) => dispatch(postSleepDataSuccess(data)))
  .catch(err => {
    dispatch(fetchSleepDataError(err));
  });
};

export const deleteSleepData = (id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/sleeps/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then((data) => dispatch(fetchSleepData()))
  .catch(err => {
    dispatch(fetchSleepDataError(err));
  });
};

export const updateSleepData = (values, id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const bedTime = Date.parse(`${values.month} ${values.day} ${values.year} ${values.bedTime}`);
  const nextDay = Number(values.day) + 1;
  let awakeTime;
  if (values.bedTime[0] === '0') {
    //so it doesn't jump ahead a day if you go to bed after midnight
    awakeTime = Date.parse(`${values.month} ${values.day} ${values.year} ${values.awakeTime}`);
  } else {
    awakeTime = Date.parse(`${values.month} ${nextDay} ${values.year} ${values.awakeTime}`);
  }
  const data = {
    id: id,
    bedTime: bedTime,
    awakeTime: awakeTime,
    alarm: (values.alarm==='Yes'),
    exercise: (values.exercise==='Yes'),
    blueLight: (values.blueLight==='Yes'),
    caffeine: values.caffeine,
    moodAtWake: values.moodAtWake,
    moodAtSleep: values.moodAtSleep,
  }
  return fetch(`${API_BASE_URL}/sleeps/${data.id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then((data) => dispatch(updateSleepDataSuccess(data)))
  .catch(err => {
    dispatch(fetchSleepDataError(err));
  });
};