import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, spawn, takeEvery } from 'redux-saga/effects';
import { map, prop } from 'remeda';
import { createTaskSaga } from 'src/utils/redux-saga-tasks';

import { saveEntities } from '../actions';
import api from './api';
import { FIND_JOBS } from './consts';
import { Job } from './types';

function* findJobs({ payload: id }: PayloadAction<string>) {
  const data: { jobs: Job[] } = yield call(api.find, { processId: id });

  const jobsIds = map(data.jobs, prop('id'));

  yield put(saveEntities(data));

  return jobsIds;
}

function* watchFindJobs() {
  yield takeEvery(FIND_JOBS, createTaskSaga(findJobs));
}

function* casesSaga() {
  yield spawn(watchFindJobs);
}

export default casesSaga;
