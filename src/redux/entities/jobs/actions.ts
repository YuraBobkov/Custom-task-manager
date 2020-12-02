import { createTaskAction } from 'src/utils/redux-saga-tasks';

import { FIND_JOBS } from './consts';

export const findJobs = createTaskAction(FIND_JOBS);
