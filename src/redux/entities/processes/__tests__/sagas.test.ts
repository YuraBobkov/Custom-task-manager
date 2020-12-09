// @ts-nocheck

import { call, put } from 'redux-saga/effects';
import api from '../api';

import { findProcesses, createProcess, deleteProcess } from '../saga';
import slice from '../slice';
import { saveEntities } from '../../actions';

const id = '5fcc2b7ca92b731aabb45d9c';

const process = {
  id,
  name: 'Unbranded Steel Hat',
  startTime: 1593852517000,
  jobsCount: 8,
  status: 'failed',
};

describe('processes - sagas', () => {
  const params = { sort: 'asc' };
  const action = { payload: params };

  it('findProcesses     ', () => {
    const saga = findProcesses(action);

    expect(saga.next().value).toEqual(call(api.find, params));
    expect(saga.next({ processes: [process] }).value).toEqual(
      put(saveEntities({ processes: [process] })),
    );
    expect(saga.next()).toEqual({
      done: true,
      value: undefined,
    });
  });
  it('createProcess     ', () => {
    const saga = createProcess();

    expect(saga.next().value).toEqual(call(api.createRecord));
    expect(saga.next(process).value).toEqual(
      put(slice.actions.saveProcess(process)),
    );
    expect(saga.next()).toEqual({
      done: true,
      value: undefined,
    });
  });

  it('deleteProcess     ', () => {
    const saga = deleteProcess({ payload: id });

    expect(saga.next().value).toEqual(call(api.deleteRecord, id));
    expect(saga.next(process).value).toEqual(
      put(slice.actions.deleteProcess(id)),
    );

    expect(saga.next()).toEqual({
      done: true,
      value: undefined,
    });
  });
});
