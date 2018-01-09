import sleepDataReducer from './sleep-data';
import {
  fetchSleepDataSuccess,
  fetchSleepDataError,
  fetchSleepDataByIdSuccess,
  postSleepDataSuccess,
  updateSleepDataSuccess
} from '../actions/sleep-data';

describe('sleepDataReducer', () => {
  const sleep1 = {
    awakeTime: "22:00",
    alarm: false,
    bedTime:  "08:00",
    blueLight:  false,
    caffeine:  10,
    date:  "Jan 01 2017",
    exercise:  false,
    hours:  0,
    id:  "123",
    moodAtSleep:  5,
    moodAtWake: 5
  };
  const sleep2 = {
    awakeTime: "23:00",
    alarm: true,
    bedTime:  "07:00",
    blueLight:  false,
    caffeine:  1,
    date:  "Jan 02 2017",
    exercise:  false,
    hours:  8,
    id:  "124",
    moodAtSleep:  5,
    moodAtWake: 5
  };
  it('Should set the initial state when nothing is passed in', () => {
    const state = sleepDataReducer(undefined, {type: '_UNKOWN'});
    expect(state).toEqual({
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
    });
  });
  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = sleepDataReducer(currentState, {type: '_UNKOWN'});
    expect(state).toBe(currentState);
  });
  describe('fetchSleepDataSuccess', () => {
    it('Should replace the entire state', () => {
      const sleepData = {
        sleeps: [sleep1, sleep2],
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
      const state = sleepDataReducer(undefined, fetchSleepDataSuccess([sleep1, sleep2]));
      expect(state).toEqual(sleepData);
    });
  });
  describe('fetchSleepDataError', () => {
    it('Should return an error', () => {
      const sleepData = {
        sleeps: [sleep1, sleep2],
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
      const error = {error: 'Error fetching data'};
      const state = sleepDataReducer(undefined, fetchSleepDataError(error));
      expect(state.error).toEqual(error);
    });
  });

  describe('fetchSleepDataByIdSuccess', () => {
    it('Should update currentSleep with the given data', () => {
      const state = sleepDataReducer(undefined, fetchSleepDataByIdSuccess(sleep1));
      expect(state.currentSleep).toEqual(sleep1);
    });
  });
  describe('postSleepDataSuccess', () => {
    it('Should add data to sleeps array', () => {
      const sleepData = {
        sleeps: [sleep1],
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
      const state = sleepDataReducer(sleepData, postSleepDataSuccess(sleep2));
      expect(state.sleeps).toEqual([sleep1, sleep2]);
    });
  });

  describe('updateSleepDataSuccess', () => {
    it('Should update data with the given id', () => {
      const sleepData = {
        sleeps: [sleep1, sleep2],
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
      const updatedSleep2 = {
        awakeTime: "23:00",
        alarm: true,
        bedTime:  "10:00",
        blueLight:  false,
        caffeine:  1,
        date:  "Jan 02 2017",
        exercise:  false,
        hours:  8,
        id:  sleep2.id,
        moodAtSleep:  5,
        moodAtWake: 5
      };
      const state = sleepDataReducer(sleepData, updateSleepDataSuccess(updatedSleep2));
      expect(state.sleeps[1]).toEqual(updatedSleep2);
    });
  });
});