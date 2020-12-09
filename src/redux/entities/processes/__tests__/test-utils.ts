import { Process } from '../types';

export const id = '5fcc2b7ca92b731aabb45d9c';

export const process: Process = {
  id,
  name: 'Unbranded Steel Hat',
  startTime: 1593852517000,
  jobsCount: 8,
  status: 'failed',
};
export const createState = (value: Process) => ({
  entities: {
    processes: {
      ids: [id],
      entities: {
        [id]: value,
      },
    },
  },
});

export const emptyState = {
  entities: {
    processes: {
      ids: [],
      entities: {},
    },
  },
};

export const responseData = { processes: [process] };
