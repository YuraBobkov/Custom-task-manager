import { createEntityAdapter } from '@reduxjs/toolkit';

import { Job } from './types';

export default createEntityAdapter<Job>();
