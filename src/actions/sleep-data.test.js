import {
  FETCH_SLEEP_DATA_SUCCESS,
  fetchSleepDataSuccess,
  FETCH_SLEEP_DATA_ERROR,
  fetchSleepDataError,
  FETCH_SLEEP_DATA_BY_ID_SUCCESS,
  fetchSleepDataByIdSuccess,
  FETCH_SLEEP_DATA_BY_ID_ERROR,
  fetchSleepDataByIdError,
  POST_SLEEP_DATA_SUCCESS,
  postSleepDataSuccess,
  POST_SLEEP_DATA_ERROR,
  postSleepDataError,
  DELETE_SLEEP_DATA_SUCCESS,
  deleteSleepDataSuccess,
  DELETE_SLEEP_DATA_ERROR,
  deleteSleepDataError,
  UPDATE_SLEEP_DATA_SUCCESS,
  updateSleepDataSuccess,
  UPDATE_SLEEP_DATA_ERROR,
  updateSleepDataError,
  fetchSleepData,
  fetchSleepDataById,
  postSleepData,
  deleteSleepData,
  updateSleepData
} from './sleep-data';

describe('fetchSleepDataSuccess', () => {
  it('Should return the action', () => {
    const data = {
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
    const action = fetchSleepDataSuccess(data);
    expect(action.type).toEqual(FETCH_SLEEP_DATA_SUCCESS);
    expect(action.data).toEqual(data);
  });
});