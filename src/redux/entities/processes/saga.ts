import { PayloadAction } from '@reduxjs/toolkit';
import {
  call,
  put,
  spawn,
  takeEvery,
  takeLatest,
  takeLeading,
} from 'redux-saga/effects';
import { createTaskSaga } from 'src/utils/redux-saga-tasks';

import { saveEntities } from '../actions';
import api from './api';
import { CREATE_PROCESS, DELETE_PROCESS, FIND_PROCESSES } from './consts';
import slice from './slice';

function* findProcesses({ payload: props }: { payload: object }) {
  const data = yield call(api.find, props);
  yield put(saveEntities(data));
}

function* watchFindProcesses() {
  yield takeEvery(FIND_PROCESSES, createTaskSaga(findProcesses));
}

function* createProcess() {
  const data = yield call(api.createRecord);
  yield put(saveEntities(data));
}

function* watchCreateProcess() {
  yield takeLatest(CREATE_PROCESS, createTaskSaga(createProcess));
}

function* deleteProcess({ payload: id }: PayloadAction<string>) {
  yield call(api.deleteRecord, id);
  yield put(slice.actions.deleteProcess(id));
}

function* watchDeleteProcess() {
  yield takeLeading(DELETE_PROCESS, createTaskSaga(deleteProcess));
}

function* casesSaga() {
  yield spawn(watchFindProcesses);
  yield spawn(watchCreateProcess);
  yield spawn(watchDeleteProcess);
}

export default casesSaga;
