// @ts-nocheck

import { call, put } from 'redux-saga/effects';

import { saveEntities } from '../../actions';
import api from '../api';
import { findJob, findJobs } from '../saga';
import { job, responseData } from './test-utils';

describe('jobs - sagas', () => {
  const params = { processId: '5fcc2b7ca92b731aabb45d9c' };
  const action = { payload: params };

  it('findJobSaga', () => {
    const saga = findJob(action);

    expect(saga.next().value).toEqual(call(api.find, params));
    expect(saga.next(responseData)).toEqual({
      done: true,
      value: job,
    });
  });

  it('findJobsSaga', () => {
    const saga = findJobs(action);

    expect(saga.next().value).toEqual(call(api.find, params));
    expect(saga.next(responseData).value).toEqual(
      put(saveEntities(responseData)),
    );

    expect(saga.next()).toEqual({
      done: true,
      value: {
        jobsIds: [job.id],
        jobsNames: [job.name],
      },
    });
  });
});
