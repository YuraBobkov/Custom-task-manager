import { createApi } from 'src/utils/api';

import { Process } from './types';

export default createApi<Process>('processes');
