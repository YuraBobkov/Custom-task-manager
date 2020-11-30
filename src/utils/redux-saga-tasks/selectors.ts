import { RootState } from 'src/redux';

const getTask = (state: RootState, id: number) => state.tasks[id];

const createGetProp = (key: string) => (state: RootState, id: number) => {
  const task = getTask(state, id);

  return task ? task[key] : null;
};

const createGetBoolProp = (key: string) => {
  const getProp = createGetProp(key);

  return (state: RootState, id: number) => getProp(state, id) || false;
};

export const getIsFinished = createGetBoolProp('finished');

export const getIsRunning = (state: RootState, id: number) =>
  getTask(state, id) ? !getIsFinished(state, id) : false;

export const getData = createGetProp('data');

export const getError = createGetProp('error');
