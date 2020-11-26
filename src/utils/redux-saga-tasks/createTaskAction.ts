import { createAction, getId } from './utils';

const createTaskAction = (type: string) =>
  createAction(type, () => ({ taskId: getId() }));

export default createTaskAction;
