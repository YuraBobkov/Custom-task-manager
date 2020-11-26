import { PayloadAction } from '@reduxjs/toolkit';
import {
  call,
  put,
  spawn,
  takeEvery,
  takeLatest,
  takeLeading,
} from 'redux-saga/effects';

import { saveEntities } from '../actions';
import api from './api';
import slice from './slice';
import { CREATE_PROCESS, DELETE_PROCESS, FIND_PROCESSES } from './consts';

function* findProcesses() {
  const data = yield call(api.find);

  yield put(saveEntities(data));
  return data;
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

function* deleteProcess({ payload: id }: PayloadAction<string>) {
  yield call(api.deleteRecord, id);
  put(slice.actions.deleteProcess(id));
}

function* watchDeleteProcess() {
  yield takeLeading(DELETE_PROCESS, deleteProcess);
}

function* casesSaga() {
  yield spawn(watchFindProcesses);
  yield spawn(watchCreateProcess);
  yield spawn(watchDeleteProcess);
}

export default casesSaga;
