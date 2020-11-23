import { createApi } from 'src/utils/api';

import { Job } from './types';

export default createApi<Job>('jobs');
