// @ts-nocheck

import { call, put } from 'redux-saga/effects';
import api from '../api';

import { findJob, findJobs } from '../saga';
import { saveEntities } from '../../actions';

const job = {
  id: '9fcc2b7ca92b731aabb45111',
  processId: '5fcc2b7ca92b731aabb45d9c',
  name: 'John',
  status: 'running',
};

describe('jobs - sagas', () => {
  const params = { processId: '5fcc2b7ca92b731aabb45d9c' };
  const action = { payload: params };

  it('findJobSaga', () => {
    const saga = findJob(action);

    expect(saga.next().value).toEqual(call(api.find, params));
    expect(saga.next({ jobs: [job] })).toEqual({
      done: true,
      value: job,
    });
  });

  it('findJobsSaga', () => {
    const saga = findJobs(action);

    expect(saga.next().value).toEqual(call(api.find, params));
    expect(saga.next({ jobs: [job] }).value).toEqual(
      put(saveEntities({ jobs: [job] })),
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
