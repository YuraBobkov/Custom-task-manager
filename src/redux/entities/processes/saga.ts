import { call, put, spawn, takeEvery, takeLatest } from 'redux-saga/effects';
import { saveEntities } from '../actions';

import api from './api';
import { FIND_PROCESSES, CREATE_PROCESS } from './consts';

function* findProcesses() {
  const data = yield call(api.find);

  yield put(saveEntities(data));
}

function* watchFindProcesses() {
  yield takeEvery(FIND_PROCESSES, findProcesses);
}

function* createProcess() {
  const data = yield call(api.createRecord);
  yield put(saveEntities(data));
}

function* watchCreateProcess() {
  yield takeLatest(CREATE_PROCESS, createProcess);
}

function* casesSaga() {
  yield spawn(watchFindProcesses);
  yield spawn(watchCreateProcess);
}

export default casesSaga;
