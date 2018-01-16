import {
  FETCH_SLEEP_DATA_SUCCESS,
  fetchSleepDataSuccess,
  FETCH_SLEEP_DATA_ERROR,
  fetchSleepDataError,
  FETCH_SLEEP_DATA_BY_ID_SUCCESS,
  fetchSleepDataByIdSuccess,
  POST_SLEEP_DATA_SUCCESS,
  postSleepDataSuccess,
  UPDATE_SLEEP_DATA_SUCCESS,
  updateSleepDataSuccess,
  fetchSleepData,
  fetchSleepDataById,
  postSleepData,
  deleteSleepData,
  updateSleepData
} from './sleep-data';
import {API_BASE_URL} from '../config';

describe('fetchSleepDataSuccess', () => {
  it('Should return the action', () => {
    const data = {
      sleeps: [],
      error: null,
      currentSleep: {
        awakeTime: "00:00",
        alarm: false,
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
    };
    const action = updateSleepDataSuccess(data);
    expect(action.type).toEqual(UPDATE_SLEEP_DATA_SUCCESS);
    expect(action.data).toEqual(data);
  });
});

describe('fetchSleepData', () => {
  it('Should dispatch fetchSleepDataSuccess on success', () => {
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
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return data;
        }
      })
    );
    const dispatch = jest.fn();
    const getState = jest.fn();
    getState.mockReturnValue({auth: {authToken: 'abc'}});
    return fetchSleepData()(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/sleeps`, {
        'headers': {'Authorization': 'Bearer abc'}, 
        'method': 'GET'
      });
      expect(dispatch).toHaveBeenCalledWith(fetchSleepDataSuccess(data));
    });
  });
  it('Should dispatch fetchSleepDataError on error', () => {
    let error = {"ok": false};
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        ok: false
      })
    );
    const dispatch = jest.fn();
    const getState = jest.fn();
    getState.mockReturnValue({auth: {authToken: 'abc'}});
    return fetchSleepData()(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/sleeps`, {
        'headers': {'Authorization': 'Bearer abc'},
        'method': 'GET'
      });
      expect(dispatch).toHaveBeenCalledWith(fetchSleepDataError(error));
    });
  });
});

describe('fetchSleepDataById', () => {
  it('should dispatch fetchSleepDataById on success', () => {
    const data = {
      awakeTime: "00:00",
      id:  "123",
      moodAtSleep:  0,
      moodAtWake: 0
    };
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return data;
        }
      })
    );
    const dispatch = jest.fn();
    const getState = jest.fn();
    getState.mockReturnValue({auth: {authToken: 'abc'}});
    return fetchSleepDataById(data.id)(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/sleeps/${data.id}`, {
        'headers': {'Authorization': 'Bearer abc'}, 
        'method': 'GET'
      });
      expect(dispatch).toHaveBeenCalledWith(fetchSleepDataByIdSuccess(data));
    });
  });
});

describe('postSleepData', () => {
  it('should dispatch postSleepDataSuccess on success', () => {
    const data1 = {
      month: "January",
      day: "1",
      year: "2017",
      bedTime: "23:00",
      awakeTime: "06:00",
      alarm: false,
      exercise: false,
      blueLight: false,
      caffeine: 1,
      moodAtWake: 6,
      moodAtSleep: 5
    };
    const data2 = {
      bedTime: 1483340400000,
      awakeTime: 14833656qq00000,
      alarm: false,
      exercise:  false,
      blueLight:  false,
      caffeine:  1,
      moodAtWake: 6,
      moodAtSleep:  5
    }
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return data2;
        }
      })
    );
    const dispatch = jest.fn();
    const getState = jest.fn();
    getState.mockReturnValue({auth: {authToken: 'abc'}});
    return postSleepData(data1)(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/sleeps/`, {
        'headers': {
          'Authorization': 'Bearer abc',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, 
        'method': 'POST',
        'body': JSON.stringify(data2)
      });
      expect(dispatch).toHaveBeenCalledWith(postSleepDataSuccess(data2));
    });
  });
})

describe('deleteSleepData', () => {
  it('should call deleteSleepData with DELETE HTTP request', () => {
    const data = {
      awakeTime: "00:00",
      id: "123",
      moodAtSleep:  0,
      moodAtWake: 0
    };
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
      })
    );
    const dispatch = jest.fn();
    const getState = jest.fn();
    getState.mockReturnValue({auth: {authToken: 'abc'}});
    return deleteSleepData(data.id)(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/sleeps/${data.id}`, {
        'headers': {'Authorization': 'Bearer abc'}, 
        'method': 'DELETE'
      });
    });
  });
});

describe('updateSleepData', () => {
  it('should dispatch updateSleepDataSuccess on success', () => {
    const data1 = {
      month: "January",
      day: "1",
      year: "2017",
      bedTime: "00:00",
      awakeTime: "00:00",
      alarm: false,
      exercise: false,
      blueLight: false,
      caffeine: 1,
      moodAtWake: 6,
      moodAtSleep: 5
    };
    const data2 = {
      bedTime: 1483257600000,
      awakeTime: 1483257600000,
      alarm: false,
      exercise:  false,
      blueLight:  false,
      caffeine:  1,
      moodAtWake: 6,
      moodAtSleep:  5
    }
    global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json() {
        return data2;
      }
    })
  );
  const dispatch = jest.fn();
  const getState = jest.fn();
  getState.mockReturnValue({auth: {authToken: 'abc'}});
  return postSleepData(data1)(dispatch, getState).then(() => {
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/sleeps/`, {
      'headers': {
        'Authorization': 'Bearer abc',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      'method': 'POST',
      'body': JSON.stringify(data2)
    });
    expect(dispatch).toHaveBeenCalledWith(postSleepDataSuccess(data2));
    });
  });
});