import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, spawn, takeEvery } from 'redux-saga/effects';
import { map, prop } from 'remeda';
import { createTaskSaga } from 'src/utils/redux-saga-tasks';

import { saveEntities } from '../actions';
import api from './api';
import { FIND_JOBS, FIND_JOB } from './consts';
import { Job } from './types';

export function* findJobs({
  payload: params,
}: PayloadAction<{
  processId?: string;
}>) {
  const data: { jobs: Job[] } = yield call(api.find, params || {});

  const jobsIds = map(data.jobs, prop('id'));
  const jobsNames = map(data.jobs, prop('name'));

  yield put(saveEntities(data));

  return { jobsIds, jobsNames };
}

function* watchFindJobs() {
  yield takeEvery(FIND_JOBS, createTaskSaga(findJobs));
}
export function* findJob({
  payload: params,
}: PayloadAction<{
  name?: string;
}>) {
  const data: { jobs: Job[] } = yield call(api.find, params || {});

  return data.jobs[0];
}

function* watchFindJob() {
  yield takeEvery(FIND_JOB, createTaskSaga(findJob));
}

function* casesSaga() {
  yield spawn(watchFindJobs);
  yield spawn(watchFindJob);
}

export default casesSaga;
