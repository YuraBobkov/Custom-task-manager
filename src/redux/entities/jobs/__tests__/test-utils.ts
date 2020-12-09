import { Job } from '../types';

export const id = '9fcc2b7ca92b731aabb45111';

export const job: Job = {
  id,
  processId: '5fcc2b7ca92b731aabb45d9c',
  name: 'John',
  status: 'running',
};

export const createState = (value: Job) => ({
  entities: {
    jobs: {
      ids: [id],
      entities: {
        [id]: value,
      },
    },
  },
});

export const emptyState = {
  entities: {
    jobs: {
      ids: [],
      entities: {},
    },
  },
};

export const responseData = { jobs: [job] };
