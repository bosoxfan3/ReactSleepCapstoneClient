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

export const UPDATE_SLEEP_DATA_SUCCESS = 'UPDATE_SLEEP_DATA_SUCCESS';
export const updateSleepDataSuccess = data => ({
    type: UPDATE_SLEEP_DATA_SUCCESS,
    data
});

export const UPDATE_SLEEP_DATA_ERROR = 'UPDATE_SLEEP_DATA_ERROR';
export const updateSleepDataError = error => ({
    type: UPDATE_SLEEP_DATA_ERROR,
    error
});

export const SAVE_CURRENT_SLEEP = 'SAVE_CURRENT_SLEEP';
export const saveCurrentSleep = (data) => ({
    type: SAVE_CURRENT_SLEEP,
    data
});

// export const TURN_EDITING_OFF = 'TURN_EDITING_OFF';
// export const turnEditingOff = () => ({
//     type: TURN_EDITING_OFF
// });

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
    // let month;
    // if (values.month === 'January') {
    //     month = 1;
    // } else if (values.month === 'February') {
    //     month = 2;
    // } else if (values.month === 'March') {
    //     month = 3;
    // } else if (values.month === 'April') {
    //     month = 4;
    // } else if (values.month === 'May') {
    //     month = 5;
    // } else if (values.month === 'June') {
    //     month = 6;
    // } else if (values.month === 'July') {
    //     month = 7;
    // } else if (values.month === 'August') {
    //     month = 8;
    // } else if (values.month === 'September') {
    //     month = 9;
    // } else if (values.month === 'October') {
    //     month = 10;
    // } else if (values.month === 'November') {
    //     month = 11;
    // } else if (values.month === 'December') {
    //     month = 12;
    // }
    const authToken = getState().auth.authToken;
    // const date = `${month}-${values.day}-${values.year}`;
    // console.log(date);
    const bedTime = Date.parse(`${values.month} ${values.day} ${values.year} ${values.bedTime}`);
    const nextDay = Number(values.day) + 1;
    const awakeTime = Date.parse(`${values.month} ${nextDay} ${values.year} ${values.awakeTime}`);
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
    console.log(data);
    return fetch(`${API_BASE_URL}/sleeps/`, {
        method: 'POST',
        headers: {
            // Provide our auth token as credentials
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

export const updateSleepData = (values) => (dispatch, getState) => {
    let month;
    if (values.month === 'January') {
        month = 1;
    } else if (values.month === 'February') {
        month = 2;
    } else if (values.month === 'March') {
        month = 3;
    } else if (values.month === 'April') {
        month = 4;
    } else if (values.month === 'May') {
        month = 5;
    } else if (values.month === 'June') {
        month = 6;
    } else if (values.month === 'July') {
        month = 7;
    } else if (values.month === 'August') {
        month = 8;
    } else if (values.month === 'September') {
        month = 9;
    } else if (values.month === 'October') {
        month = 10;
    } else if (values.month === 'November') {
        month = 11;
    } else if (values.month === 'December') {
        month = 12;
    }
    const authToken = getState().auth.authToken;
    const date = `${month}-${values.day}-${values.year}`;
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
    return fetch(`${API_BASE_URL}/sleeps/${date}`, {
        method: 'PUT',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        },
        body: data
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(updateSleepDataSuccess(data)))
        .catch(err => {
            dispatch(updateSleepDataError(err));
        });
};