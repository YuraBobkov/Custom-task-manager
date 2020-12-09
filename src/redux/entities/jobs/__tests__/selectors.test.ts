// @ts-nocheck

import { selectById } from '../selectors';

const id = '9fcc2b7ca92b731aabb45111';

const job = {
  id,
  processId: '5fcc2b7ca92b731aabb45d9c',
  name: 'John',
  status: 'running',
};

const createState = (value) => ({
  entities: {
    jobs: {
      ids: [id],
      entities: {
        [id]: value,
      },
    },
  },
});

const emptyState = {
  entities: {
    jobs: {
      ids: [],
      entities: {},
    },
  },
};

describe('jobs - selectors', () => {
  it('selectById', () => {
    const state = createState(job);

    expect(selectById(state, id)).toBe(job);
    expect(selectById(state, '5fcc2b7ca92b731aabb45d9c')).toBe(undefined);
    expect(selectById(emptyState, id)).toBe(undefined);
  });
});
