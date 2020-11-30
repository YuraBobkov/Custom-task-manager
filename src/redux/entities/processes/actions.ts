import { createTaskAction } from 'src/utils/redux-saga-tasks';

import { FIND_PROCESSES, CREATE_PROCESS, DELETE_PROCESS } from './consts';

export const findProcesses = createTaskAction(FIND_PROCESSES);

export const createProcess = createTaskAction(CREATE_PROCESS);

export const deleteProcess = createTaskAction(DELETE_PROCESS);
