import {
  call,
  put,
  select,
  spawn,
  takeEvery,
  take,
  takeLatest,
} from 'redux-saga/effects';

import api from './api';
import slice from './slice';

function* findProcesses() {
  const data = yield call(api.find);
}

function* watchFindProcesses() {
  yield takeEvery(slice.actions.findProcesses, findProcesses);
}

function* findProcess({
  payload: id,
}: ReturnType<typeof slice.actions.findProcess>) {
  const data = yield call(api.findRecord, id);
}

function* watchFindProcess() {
  yield takeLatest(slice.actions.findProcess, findProcess);
}

function* createProcess() {
  const data = yield call(api.createRecord);
}

function* watchCreateProcess() {
  yield takeLatest(slice.actions.createProcess.type, createProcess);
}

function* updateProcess({
  payload,
}: {
  payload: { id: string; attrs: { [key: string]: any } };
}) {
  const { id, attrs } = payload;
  const data = yield call(api.updateRecord, id, attrs);
}

function* watchUpdateProcess() {
  yield takeLatest(slice.actions.updateProcess.type, updateProcess);
}

function* removeProcess({ payload: id }: { payload: string }) {
  yield call(api.deleteRecord, id);
}

function* watchRemoveProcess() {
  yield takeLatest(slice.actions.deleteProcess.type, removeProcess);
}

function* casesSaga() {
  yield spawn(watchFindProcesses);
  yield spawn(watchFindProcess);
  yield spawn(watchCreateProcess);
  yield spawn(watchUpdateProcess);
  yield spawn(watchRemoveProcess);
}

export default casesSaga;
