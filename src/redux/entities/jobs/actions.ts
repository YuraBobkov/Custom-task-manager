import { createTaskAction } from 'src/utils/redux-saga-tasks';

import { FIND_JOBS, FIND_JOB } from './consts';

export const findJobs = createTaskAction(FIND_JOBS);
export const findJob = createTaskAction(FIND_JOB);
