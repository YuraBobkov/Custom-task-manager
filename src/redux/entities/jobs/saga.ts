import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, spawn, takeEvery } from 'redux-saga/effects';
import { saveEntities } from '../actions';

import api from './api';
import { FIND_JOBS } from './consts';

function* findJobs({ payload: id }: PayloadAction<string>) {
  const data = yield call(api.find, { processId: id });

  yield put(saveEntities(data));
}

function* watchFindJobs() {
  yield takeEvery(FIND_JOBS, findJobs);
}

function* casesSaga() {
  yield spawn(watchFindJobs);
}

export default casesSaga;
