import { call, put, spawn, takeEvery, takeLatest } from 'redux-saga/effects';
import { saveEntities } from '../actions';

import api from './api';
import { FIND_PROCESSES, CREATE_PROCESS } from './types';

function* findProcesses() {
  const data = yield call(api.find);

  yield put(saveEntities(data));
}

function* watchFindProcesses() {
  yield takeEvery(FIND_PROCESSES, findProcesses);
}

// function* findProcess({
//   payload: id,
// }: ReturnType<typeof slice.actions.findProcess>) {
//   const data = yield call(api.findRecord, id);
// }

// function* watchFindProcess() {
//   yield takeLatest(slice.actions.findProcess, findProcess);
// }

function* createProcess() {
  const data = yield call(api.createRecord);
  yield put(saveEntities(data));
}

function* watchCreateProcess() {
  yield takeLatest(CREATE_PROCESS, createProcess);
}

// function* updateProcess({
//   payload,
// }: {
//   payload: { id: string; attrs: { [key: string]: any } };
// }) {
//   const { id, attrs } = payload;
//   const data = yield call(api.updateRecord, id, attrs);
// }

// function* watchUpdateProcess() {
//   yield takeLatest(slice.actions.updateProcess.type, updateProcess);
// }

// function* removeProcess({ payload: id }: { payload: string }) {
//   yield call(api.deleteRecord, id);
// }

// function* watchRemoveProcess() {
//   yield takeLatest(slice.actions.deleteProcess.type, removeProcess);
// }

function* casesSaga() {
  yield spawn(watchFindProcesses);
  // yield spawn(watchFindProcess);
  yield spawn(watchCreateProcess);
  // yield spawn(watchUpdateProcess);
  // yield spawn(watchRemoveProcess);
}

export default casesSaga;
