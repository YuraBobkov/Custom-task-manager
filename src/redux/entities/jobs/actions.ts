import { createAction } from '@reduxjs/toolkit';

import { FIND_JOBS } from './consts';

export const findJobs = createAction<string>(FIND_JOBS);
