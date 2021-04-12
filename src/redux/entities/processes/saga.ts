import { PayloadAction } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
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
import { Process } from './types';

export function* findProcesses({
  payload: params,
}: PayloadAction<{ [key: string]: 'asc' | 'des' }>) {
  try {
    const data: { processes: Process[] } = yield call(api.find, params);
    yield put(saveEntities(data));
  } catch (error) {
    toast.error(error.message);
  }
}

function* watchFindProcesses() {
  yield takeEvery(FIND_PROCESSES, createTaskSaga(findProcesses));
}

export function* createProcess() {
  try {
    const data: Process = yield call(api.createRecord);
    yield put(slice.actions.saveProcess(data));

    toast.success('Process created');
  } catch (error) {
    toast.error(error.message);
  }
}

function* watchCreateProcess() {
  yield takeLatest(CREATE_PROCESS, createTaskSaga(createProcess));
}

export function* deleteProcess({ payload: id }: PayloadAction<string>) {
  try {
    yield call(api.deleteRecord, id);
    yield put(slice.actions.deleteProcess(id));

    toast.success('Process deleted');
  } catch (error) {
    toast.error(error.message);
  }
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
