import {
  FETCH_SLEEP_DATA_SUCCESS,
  fetchSleepDataSuccess,
  FETCH_SLEEP_DATA_ERROR,
  fetchSleepDataError,
  FETCH_SLEEP_DATA_BY_ID_SUCCESS,
  fetchSleepDataByIdSuccess,
  POST_SLEEP_DATA_SUCCESS,
  postSleepDataSuccess,
  // DELETE_SLEEP_DATA_SUCCESS,
  // deleteSleepDataSuccess,
  UPDATE_SLEEP_DATA_SUCCESS,
  updateSleepDataSuccess,
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

describe('fetchSleepDataError', () => {
  it('Should return the action', () => {
    const error = '505 Internal Server Error';
    const action = fetchSleepDataError(error);
    expect(action.type).toEqual(FETCH_SLEEP_DATA_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('fetchSleepDataByIdSuccess', () => {
  it('Should return the action', () => {
    const data = {
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
    const action = fetchSleepDataByIdSuccess(data);
    expect(action.type).toEqual(FETCH_SLEEP_DATA_BY_ID_SUCCESS);
    expect(action.data).toEqual(data);
  });
});

describe('postSleepDataSuccess', () => {
  it('Should return the action', () => {
    const data = {
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
    };
    const action = postSleepDataSuccess(data);
    expect(action.type).toEqual(POST_SLEEP_DATA_SUCCESS);
    expect(action.data).toEqual(data);
  });
});

describe('updateSleepDataSuccess', () => {
  it('Should return the action', () => {
    const data = {
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
      moodAtWake: 1
    };
    const action = updateSleepDataSuccess(data);
    expect(action.type).toEqual(UPDATE_SLEEP_DATA_SUCCESS);
    expect(action.data).toEqual(data);
  });
});

// describe('fetchSleepData', () => {
//   it('Should dispatch fetchSleepDataSuccess', () => {
//     const data = {
//       sleeps: [],
//       error: null,
//       currentSleep: {
//         awakeTime: "00:00",
//         alarm: false,
//         bedTime:  "00:00",
//         blueLight:  false,
//         caffeine:  0,
//         date:  "Jan 01 2017",
//         exercise:  false,
//         hours:  0,
//         id:  "",
//         moodAtSleep:  0,
//         moodAtWake: 0
//       }
//     };
//     global.fetch = jest.fn().mockImplementation(() =>
//       Promise.resolve({
//         ok: true,
//         json() {
//           return data;
//         }
//       })
//     );
//     const dispatch = jest.fn();
//     const getState = getState();
//     return fetchSleepData()(dispatch, getState).then(() => {
//       expect(fetch).toHaveBeenCalledWith('/sleeps');
//       expect(dispatch).toHaveBeenCalledWith(fetchSleepDataSuccess(data));
//     });
//   });
// });