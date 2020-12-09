// @ts-nocheck

import { selectById, selectIds } from '../selectors';

const id = '5fcc2b7ca92b731aabb45d9c';

const process = {
  id,
  name: 'Unbranded Steel Hat',
  startTime: 1593852517000,
  jobsCount: 8,
  status: 'failed',
};
const createState = (value) => ({
  entities: {
    processes: {
      ids: [id],
      entities: {
        [id]: value,
      },
    },
  },
});

const emptyState = {
  entities: {
    processes: {
      ids: [],
      entities: {},
    },
  },
};

describe('processes - selectors', () => {
  it('selectById', () => {
    const state = createState(process);

    expect(selectById(state, id)).toBe(process);
    expect(selectById(state, '234f2')).toBe(undefined);
    expect(selectById(emptyState, id)).toBe(undefined);
  });

  it('selectIds', () => {
    const state = createState(process);

    expect(selectIds(state)).toStrictEqual([id]);
    expect(selectIds(emptyState)).toStrictEqual([]);
  });
});
