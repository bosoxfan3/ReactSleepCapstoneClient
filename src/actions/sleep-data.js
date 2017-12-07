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
