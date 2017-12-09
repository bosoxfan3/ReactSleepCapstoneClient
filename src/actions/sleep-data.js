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

export const POST_SLEEP_DATA_SUCCESS = 'POST_SLEEP_DATA_SUCCESS';
export const postSleepDataSuccess = data => ({
    type: POST_SLEEP_DATA_SUCCESS,
    data
});

export const POST_SLEEP_DATA_ERROR = 'POST_SLEEP_DATA_ERROR';
export const postSleepDataError = error => ({
    type: POST_SLEEP_DATA_ERROR,
    error
});

export const DELETE_SLEEP_DATA_SUCCESS = 'DELETE_SLEEP_DATA_SUCCESS';
export const deleteSleepDataSuccess = data => ({
    type: DELETE_SLEEP_DATA_SUCCESS,
    data
});

export const DELETE_SLEEP_DATA_ERROR = 'DELETE_SLEEP_DATA_ERROR';
export const deleteSleepDataError = error => ({
    type: DELETE_SLEEP_DATA_ERROR,
    error
});

export const fetchSleepData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/sleeps`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
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

export const postSleepData = (values) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const date = `${values.month}-${values.day}-${values.year}`;
    const bedTime = Date.parse(`${values.month} ${values.day} ${values.year} ${values.bedTime}`);
    const nextDay = Number(values.day) + 1;
    const awakeTime = Date.parse(`${values.month} ${nextDay} ${values.year} ${values.awakeTime}`);
    const data = {
        date: date,
        bedTime: bedTime,
        awakeTime: awakeTime,
        alarm: (values.alarm==='Yes'),
        exercise: (values.exercise==='Yes'),
        blueLight: (values.blueLight==='Yes'),
        caffeine: values.caffeine,
        moodAtWake: values.moodAtWake,
        moodAtSleep: values.moodAtSleep,
    }
    console.log(data);
    return fetch(`${API_BASE_URL}/sleeps/new`, {
        method: 'POST',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        },
        body: data
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(postSleepDataSuccess(data)))
        .catch(err => {
            dispatch(postSleepDataError(err));
        });
};

export const deleteSleepData = (date) => (dispatch, getState) => {
    console.log('trying to delete');
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/sleeps/${date}`, {
        method: 'DELETE',
        headers: {
            // Provide our auth token as credentials
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